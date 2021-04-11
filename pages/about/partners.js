import { Container } from "react-bootstrap";
import OneWorldCard from "../../components/Partners/OneWorldCard";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";

const partners = () => {
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

export default partners;

// @todo - fix partners in mobile && staff specific route