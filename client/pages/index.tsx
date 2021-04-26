import { Container } from "react-bootstrap";
import LiveFlights from "../components/Home/LiveFlights";
import Head from "next/head";
import { useEffect, useContext, useState } from "react";
import Stats from "../components/Home/Stats";
import CEOMessage from "../components/Home/CEOMessage";
import { authContext } from "../contexts/AuthContext";

const Home: React.FC = () => {
  const [loggedUser, setLoggedUser] = useContext(authContext);
  useEffect(() => {
    document.getElementById("nav-home").classList.add("active");
    return () => document.getElementById("nav-home").classList.remove("active");
  }, []);

  useEffect(() => {
    setLoggedUser("wassup");
    console.log(loggedUser);
  }, [loggedUser]);

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
