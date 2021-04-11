import { Container } from "react-bootstrap";
import LiveFlights from "./LiveFlights";
import Layout from "../Layout/Layout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Finnair Virtual</title>
        <meta name="description" content="Finnair Virtual - Fly Finnish" />
      </Head>
      <Layout>
        <div className="main-banner">
          <h1>Finnair Virtual</h1>
        </div>
        <Container style={{ minHeight: "1000px" }}>
          <LiveFlights />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
