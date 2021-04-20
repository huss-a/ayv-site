import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => (window.location.href = "/"), 2000);
  }, []);
  return (
    <>
      <Head>
        <title>Finnair Virtual | 404: Page Not Found</title>
      </Head>
      <Container className="not-found-container">
        <div className="not-found">
          <div className="not-found-left">
            <h1>Not Found</h1>
          </div>
          <div className="not-found-right">
            <h4>
              Looks like you're lost,{" "}
              <strong>redirecting back to the Homepage...</strong>
            </h4>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
