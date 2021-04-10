import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import LiveFlights from "./LiveFlights";
import Layout from "../Layout/Layout";

const Home = () => {
  useEffect(() => {
    document.title = "Finnair Virtual";
  });
  return (
    <Layout>
      <div className="main-banner">
        <h1>Finnair Virtual</h1>
      </div>
      <Container style={{ minHeight: "1000px" }}>
        <LiveFlights />
      </Container>
    </Layout>
  );
};

export default Home;
