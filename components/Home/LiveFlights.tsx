import React, { useEffect, useState, useCallback } from "react";
import { Spinner, Button } from "react-bootstrap";
import useFetch from "../../helpers/useFetch";
/*
Enviroment Variables-

From Next.js Docs:
"
In order to keep server-only secrets safe, Next.js replaces process.env.* with the correct values at build time. This means that process.env is not a standard JavaScript object, so you’re not able to use object destructuring. Environment variables must be referenced as e.g. process.env.NEXT_PUBLIC_PUBLISHABLE_KEY, not const { NEXT_PUBLIC_PUBLISHABLE_KEY } = process.env
"
--------
"
By default all environment variables loaded through .env.local are only available in the Node.js environment, meaning they won't be exposed to the browser.

In order to expose a variable to the browser you have to prefix the variable with `NEXT_PUBLIC_`.
"
*/

const LiveFlights = () => {
  // Types
  interface FlightInfo {
    username: string;
    callsign: string;
    latitude: number;
    longitude: number;
    altitude: number;
    speed: number;
    verticalSpeed: number;
    track: number;
    lastReport: Date;
    flightId: string;
    userId: string;
    aircraftId: string;
    liveryId: string;
    heading: number;
    virtualOrganization: string | null;
  }

  // States
  const [pilots, setPilots] = useState<FlightInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [reloading, setReloading] = useState(false);

  // Funcs
  const getFlights = useCallback(async () => {
    try {
      const callsignRegex = /^Finnair \d{3}VA$/g;
      const url = `https://api.infiniteflight.com/public/v2/flights/${process.env.NEXT_PUBLIC_SESSION_ID}`;

      const data = await useFetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY_IF}`,
        },
      });

      const ayvFlights: FlightInfo[] = await data.result.filter(
        (flight: FlightInfo) => callsignRegex.test(flight.callsign)
      );

      await ayvFlights.forEach((flight) =>
        flight.username === null ? (flight.username = "Username Not Set") : null
      );

      return ayvFlights;
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function reloadFlights() {
    try {
      setReloading(true);
      const ayvFlights = await getFlights();
      setPilots(ayvFlights);
      setReloading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const flightReload =
      document.querySelector<HTMLButtonElement>("#flight-reload");
    const fetchFlightInfoOnRender = async () => {
      try {
        flightReload.style.display = "none";
        const ayvFlights = await getFlights();
        setPilots(ayvFlights);
        setLoading(false);
        flightReload.style.display = "block";
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFlightInfoOnRender();

    const iframe = document.querySelector<HTMLIFrameElement>("iframe");
    const mapLoad = document.querySelector<HTMLDivElement>(".map-load");
    const mapLoadH3 =
      document.querySelector<HTMLHeadingElement>(".map-load h3");

    setTimeout(async () => {
      iframe.style.display = "block";
      mapLoad.style.backgroundColor = "transparent";
      mapLoadH3.style.display = "none";
    }, 5000);

    const pilotTable = document.querySelector<HTMLTableElement>("#pilot-table");
    pilotTable.style.display = "none";
    if (!loading) {
      pilotTable.style.display = "inline-table";
      document.querySelector<HTMLDivElement>(
        "#pilot-table-spinner"
      ).style.display = "none";
    }

    if (pilots.length === 0) pilotTable.style.display = "none";
  }, [loading, pilots.length, getFlights]);

  return (
    <div>
      <h1 style={{ fontWeight: 600 } as const}>VA Live Flights</h1>
      <div className="map-load">
        <h3 className="loading">
          <Spinner
            animation="grow"
            variant="primary"
            style={{ position: "relative", bottom: "5px" }}
          />
          <span className="p-2">Loading...</span>
        </h3>
        <iframe
          height="800px"
          width="100%"
          title="MapFlight Map"
          style={{ border: "2px solid grey" }}
          src={`https://en.map-flight.com?apikey=${process.env.NEXT_PUBLIC_API_KEY_MAPFLIGHT}`}
        />
      </div>
      <div id="pilot-table-wrapper" className="mt-2">
        {pilots.length === 0 && (
          <h3 className="mt-3">No Flights to display :(</h3>
        )}
        <Spinner
          id="pilot-table-spinner"
          style={{ position: "relative", top: "10px" }}
          variant="primary"
          animation="grow"
        />

        <table id="pilot-table" className="table mt-4">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Callsign</th>
            </tr>
          </thead>
          <tbody>
            {pilots.map((pilot) => (
              <tr key={pilot.flightId}>
                <th scope="row">{pilot.username}</th>
                <td>{pilot.callsign}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button id="flight-reload" onClick={reloadFlights} className="m-3">
        {!reloading ? (
          <i className="fas fa-plane" />
        ) : (
          <Spinner
            style={{ position: "relative", bottom: "5px" }}
            animation="grow"
            variant="primary"
            size="sm"
          />
        )}{" "}
        Reload Flights
      </Button>
    </div>
  );
};

export default LiveFlights;

export async function getServerSideProps() {}
