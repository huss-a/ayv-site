import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
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
              Looks like you're lost, go back to the{" "}
              <a onClick={router.push("/")} className="link">
                Homepage
              </a>
              ?
            </h4>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
