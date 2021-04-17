import { Container } from "react-bootstrap";
import LiveFlights from "../components/Home/LiveFlights";
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.getElementById("nav-home").classList.add("active");
    return () => document.getElementById("nav-home").classList.remove("active");
  });
  return (
    <>
      <Head>
        <title>Finnair Virtual</title>
        <meta name="description" content="Finnair Virtual - Fly Finnish" />
      </Head>
        <div className="main-banner">
          <h1>Finnair Virtual</h1>
        </div>
        <Container style={{ minHeight: "1000px" }}>
          <LiveFlights />
        </Container>
    </>
  );
};

export default Home;
