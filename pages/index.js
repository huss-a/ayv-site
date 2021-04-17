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
        <div className="stats-container">
          <h1>VA Stats</h1>
          <div className="stats">
            <div className="total-hrs">
              <h4>Flown Hours <i className="fas fa-clock"/></h4>
              <h5>3,000+</h5>
            </div>
            <div className="total-pilots">
              <h4>Pilots <i className="fas fa-address-card"/></h4>
              <h5>40+</h5>
            </div>
            <div className="total-miles">
              <h4>Miles Flown <i className="fas fa-plane-departure"/></h4>
              <h5>8,54,000+</h5>
            </div>
            <div className="total-routes">
              <h4>Routes <i className="fas fa-route"/></h4>
              <h5>1850+</h5>
            </div>
          </div>
        </div>
        <LiveFlights />
      </Container>
    </>
  );
};

export default Home;
