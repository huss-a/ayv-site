import express from "express";
const router = express.Router();
import axios from "axios";

const BASE_URL = `https://api.infiniteflight.com/public/v2`;
const sessionId = process.env.SESSION_ID;
const apiKey = process.env.API_KEY_IF;

router.get("/getAllVaFlights", async (req, res) => {
  try {
    console.log("Ref: " + req.headers.referer);
    if (req.headers.referer !== "https://ayv-dev.netlify.app/")
      return res.status(401).send("Unauthorized request!");
    const apiRes = await axios.get(
      `${BASE_URL}/flights/${sessionId}?apikey=${apiKey}`
    );

    const vaFlights = apiRes.data.result.filter((f: { callsign: string }) =>
      f.callsign.match(/Finnair....VA*/g)
    );

    res.send(vaFlights);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.get("/getEFHKatis", async (req, res) => {
  try {
    if (req.hostname !== "https://ayv-dev.netlify.app")
      return res.status(401).send("Unauthorized request!");
    const apiRes = await axios.get(
      `${BASE_URL}/airport/EFHK/atis/${sessionId}?apikey=${apiKey}`
    );

    console.dir(`Hostname: ${req.hostname.toString()}`);
    res.send(apiRes.data);
  } catch (err) {
    console.dir(`Hostname: ${req.hostname.toString()}`);

    res.send(null);
  }
});

export default router;
