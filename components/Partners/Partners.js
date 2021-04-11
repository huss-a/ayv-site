import { Container } from "react-bootstrap";
import OneWorldCard from "./OneWorldCard";
import Layout from "../Layout/Layout";
import Head from "next/head";

const Partners = () => {
  return (
    <>
      <Head>
        <title>Finnair Virtual | Partners</title>
        <meta name="description" content="Finnair Virtual - Partners" />
      </Head>
      <Layout>
        <Container className="my-4">
          <OneWorldCard />
        </Container>
      </Layout>
    </>
  );
};

export default Partners;
