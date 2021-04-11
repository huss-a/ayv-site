import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import OneWorldCard from "./OneWorldCard";
import Layout from "../Layout/Layout";

const Partners = () => {
  useEffect(() => {
    document.title = "Finnair Virtual | Partners";
  });
  return (
    <Layout>
      <Container className="my-4">
        <OneWorldCard />
      </Container>
    </Layout>
  );
};

export default Partners;
