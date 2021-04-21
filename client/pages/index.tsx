import { Container } from "react-bootstrap";
import LiveFlights from "../components/Home/LiveFlights";
import Head from "next/head";
import { useEffect } from "react";
import Stats from "../components/Home/Stats";
import CEOMessage from "../components/Home/CEOMessage";
import axios from "axios";

const Home: React.FC = () => {
  async function getUser() {
    await axios
      .get("http://localhost:5000/user", { withCredentials: true })
      .then((res) => console.log(res.data));
  }
  useEffect(() => {
    document.getElementById("nav-home").classList.add("active");
    return () => document.getElementById("nav-home").classList.remove("active");
  }, []);
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
        <button onClick={async () => await getUser()}>get user</button>
      </Container>
    </>
  );
};

export default Home;
