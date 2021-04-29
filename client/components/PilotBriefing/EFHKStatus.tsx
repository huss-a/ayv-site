import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

const EFHKStatus: React.FC = () => {
  const [atis, setAtis] = useState<string | null>("");
  const [metar, setMetar] = useState("");
  const getAtis = async () => {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const res = await axios.get<{ result: string }>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/if/getEFHKatis`,
        config
      );
      return res.data.result;
    } catch (err) {
      console.log(err);
    }
  };

  const getMetar = async () => {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/if/getefhkmetar`,
        config
      );

      return res.data;
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
    <Card className="m-4 p-2 info-card">
      <Card.Header>
        <Card.Title as="h3">Our Hub: Helsinki Vantaa Airport (EFHK)</Card.Title>
      </Card.Header>
      <div className="p-4">
        <h3>
          {!atis
            ? "Helsinki Vantaa Airport (EFHK) is currently inactive 😬"
            : "Helsinki Vantaa Airport (EFHK) is active! 😄"}
        </h3>
        {atis && (
          <p className="my-4">
            <strong>EFHK ATIS: </strong>
            {atis}
          </p>
        )}
        {metar && (
          <p className="my-4">
            <strong>EFHK METAR: </strong>
            <code>{metar}</code>
          </p>
        )}
      </div>
    </Card>
  );
};

export default EFHKStatus;
