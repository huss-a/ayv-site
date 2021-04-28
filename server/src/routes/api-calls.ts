import express from "express";
const router = express.Router();
import axios from "axios";
import auth from "../middleware/auth";

const BASE_URL = `https://api.infiniteflight.com/public/v2`;
const sessionId = process.env.SESSION_ID;
const apiKey = process.env.API_KEY_IF;

// types
interface ApiResponseIf<T> {
  result: T;
}

interface ApiResponseMetar<T> {
  data: T;
}

router.get("/getAllVaFlights", auth, async (req, res) => {
  try {
    console.log("Ref: " + req.headers.referer);
    if (req.headers.referer !== `${process.env.CORS_URL}/`)
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

router.get("/getEFHKatis", auth, async (req, res) => {
  try {
    const apiRes = await axios.get<ApiResponseIf<string>>(
      `${BASE_URL}/airport/EFHK/atis/${sessionId}?apikey=${apiKey}`
    );

    res.send(apiRes.data);
  } catch (err) {
    res.send(null);
  }
});

router.get("/getEFHKmetar", auth, async (req, res) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.METAR_API_KEY,
      },
    };
    const apiRes = await axios.get<ApiResponseMetar<string[]>>(
      "https://api.checkwx.com/metar/EFHK",
      config
    );

    return res.send(apiRes.data.data[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

export default router;
