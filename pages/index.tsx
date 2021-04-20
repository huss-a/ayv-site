import { Container } from "react-bootstrap";
import LiveFlights from "../components/Home/LiveFlights";
import Head from "next/head";
import { useEffect } from "react";
//import aos from "aos";
//import "aos/dist/aos.css";
import Stats from "../components/Home/Stats";
import CEOMessage from "../components/Home/CEOMessage";

const Home = () => {
  useEffect(() => {
    //aos.init();
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
      <Container>
        <Stats />
      </Container>
      <CEOMessage />
      <Container>
        <LiveFlights />
      </Container>
    </>
  );
};

export default Home;
