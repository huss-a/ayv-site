import { Container } from "react-bootstrap";
import OneWorldCard from "../../components/Partners/OneWorldCard";
import NormalPartnersCard from "../../components/Partners/NormalPartnersCard";
import Head from "next/head";
import { useEffect } from "react";

const partners = () => {
  useEffect(() => {
    document.querySelector(".nav-about").classList.add("active");
    return () =>
      document.querySelector(".nav-about").classList.remove("active");
  }, []);
  return (
    <>
      <Head>
        <title>Finnair Virtual | Partners</title>
        <meta name="description" content="Finnair Virtual - Partners" />
      </Head>

      <Container className="my-4">
        <OneWorldCard />
        <NormalPartnersCard />
      </Container>
    </>
  );
};

export default partners;
