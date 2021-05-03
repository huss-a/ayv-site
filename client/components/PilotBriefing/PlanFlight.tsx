import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";

const PlanFlight = () => {
  const iframeStyles = {
    display: "block",
    border: "5px solid grey",
    borderRadius: "15px",
  };
  const [dep, setDep] = useState("");
  const [arr, setArr] = useState("");
  return (
    <Card
      style={{ display: "grid", placeItems: "center" }}
      className="plan-flight info-card m-4 p-2"
    >
      <h2 className="mb-4">Planning a flight?</h2>
      <Form.Control
        placeholder="Departure ICAO (Ex: EFHK)"
        onChange={(e) => setDep(e.target.value)}
        value={dep}
      />
      <div className="plan-flight-icons">
        <h2>
          <i className="fas fa-plane-departure" />
        </h2>{" "}
        <h2>
          <i className="fas fa-plane-arrival" />
        </h2>
      </div>
      <Form.Control
        placeholder="Arrival ICAO (Ex: EGLL)"
        onChange={(e) => setArr(e.target.value)}
        value={arr}
      />{" "}
      <iframe
        className="my-4"
        src="https://fpltoif.com/simbrief"
        height="600px"
        width="100%"
        style={iframeStyles}
      />
    </Card>
  );
};

export default PlanFlight;
