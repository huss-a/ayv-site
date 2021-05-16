import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Spinner, Container } from "react-bootstrap";
import Head from "next/head";
import EFHKStatus from "../../components/PilotBriefing/EFHKStatus";
import PlanFlight from "../../components/PilotBriefing/PlanFlight";

const briefing: React.FC = () => {
  const router = useRouter();
  const [pilot, setPilot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPilot, setIsPilot] = useState(false);
  const AYV_GUILD_ID = "789506130350833664";

  const getLoggedInUser = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/user",
        {
          withCredentials: true,
        }
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getLoggedInUserOnRender = async () => {
      setLoading(true);
      const p = await getLoggedInUser();
      if (!p) return router.push("/pilots/login");
      console.log(p);
      setPilot(p);
      setLoading(false);
    };

    getLoggedInUserOnRender(); // i suck at naming these
  }, []);

  useEffect(() => {
    if (pilot) {
      for (const g of pilot?.guilds) {
        if (g.id === AYV_GUILD_ID) {
          setIsPilot(true);
          break;
        }
        setIsPilot(false);
      }
    }
  }, [pilot]);

  return (
    <>
      <Head>
        <title>
          {!loading
            ? `Finnair Virtual - ${
                pilot?.username + "#" + pilot?.discriminator
              }`
            : "Finnair Virtual"}
        </title>
      </Head>
      <div className="mt-4">
        {!loading && isPilot ? (
          <Container className="mt-2">
            <div className="pilot">
              <img
                src={`https://cdn.discordapp.com/avatars/${
                  pilot?.id + "/" + pilot?.avatar + ".webp?size=1024"
                }`}
                alt="Your Discord PFP"
                className="pfp p-2"
              />
              <h1>
                <i className="fas fa-plane" /> Welcome back, {pilot?.username}!
              </h1>
              <h6 className="text-muted">
                <i className="fas fa-phone" />{" "}
                {pilot?.callsign ?? "Callsign not set"}
              </h6>
              <h6 className="text-muted">
                <i className="fas fa-envelope" /> {pilot?.email}
              </h6>
            </div>
            <EFHKStatus />
            <PlanFlight />
          </Container>
        ) : !loading && !isPilot ? (
          <div className="not-pilot-container container">
            <h1 className="text-center">
              {"Only AYVA Pilots allowed! :("}
            </h1>
            <h2 className="text-center">
              You can{" "}
              <a href="https://forms.gle/cMUA1B2hcHeH7DYh6" className="link">
                become one
              </a>{" "}
              today though!
            </h2>
          </div>
        ) : (
          <Spinner animation="grow" variant="primary" />
        )}
      </div>
    </>
  );
};

export default briefing;
