import axios from "axios";
import React, { useEffect, useState } from "react";

const EFHKStatus: React.FC = () => {
  interface ApiResponseIf<T> {
    result: T;
  }

  interface ApiResponseMetar<T> {
    data: T;
  }
  const [atis, setAtis] = useState<string | null>("");
  const [metar, setMetar] = useState("");
  const getAtis = async () => {
    try {
      const res = await axios.get<string | null>(
        "https://ayv-site.herokuapp.com/if/getEFHKatis"
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getMetar = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_METAR_API_KEY,
        },
      };
      const res = await axios.get<ApiResponseMetar<string[]>>(
        "https://api.checkwx.com/metar/EFHK",
        config
      );

      return res.data.data[0];
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const tasksOnRender = async () => {
      const apiAtisRes = await getAtis();
      setAtis(apiAtisRes);
      const apiMetarRes = await getMetar();
      setMetar(apiMetarRes);
    };

    tasksOnRender();
  }, []);
  return (
    <>
      <div className="efhk p-4">
        <h3>
          {!atis
            ? "Helsinki Vantaa Airport (EFHK) is currently inactive 😬"
            : "Helsinki Vantaa Airport (EFHK) is active! 😄"}
        </h3>
        {atis && (
          <p>
            <strong>EFHK ATIS: </strong>
            {atis}
          </p>
        )}
        {metar && (
          <p>
            <strong>EFHK METAR: </strong>
            <code>{metar}</code>
          </p>
        )}
      </div>
    </>
  );
};

export default EFHKStatus;
