import useFetch from "../../helpers/useFetch";
import { FlightInfo } from "../../types/FlightInfo";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers.referer !== process.env.NEXT_PUBLIC_SITE_URL + "/")
    return res.status(403).json({ msg: "Unauthorized request." });

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

  ayvFlights.forEach(
    (flight) =>
      flight.username === null && (flight.username = "Username Not Set")
  );

  return res.json(ayvFlights);
};
