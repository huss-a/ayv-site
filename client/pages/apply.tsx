import { Container, Card, ListGroup } from "react-bootstrap";
import reqs from "../data/RequirementsList";
import Head from "next/head";
import { useEffect } from "react";

const apply: React.FC = () => {
  useEffect(() => {
    document.getElementById("nav-apply").classList.add("active");
    return () =>
      document.getElementById("nav-apply").classList.remove("active");
  }, []);
  return (
    <>
      <Head>
        <title>Finnair Virtual | Apply</title>
        <meta name="description" content="Finnair Virtual - Apply" />
      </Head>

      <div className="apply-wrapper">
        <Container className="apply-container my-4">
          <Card
            className="animate__animated animate__fadeInLeft m-4"
            style={{ borderTop: "7px solid #0b1560" }}
          >
            <Card.Header>
              <Card.Title>
                <h2>Requirements</h2>
                <Card.Subtitle className="mt-2">
                  <h6>
                    If you do not meet the requirements listed below, your
                    application will be rejected.
                  </h6>
                </Card.Subtitle>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup className="list-group">
                {reqs.map((requirement, index) => (
                  <ListGroup.Item key={index}>{requirement}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
          <Card
            className="animate__animated animate__fadeInRight m-4"
            style={{ borderTop: "7px solid #3a4ac5" }}
          >
            <Card.Header>
              <Card.Title>
                <h2>Application & Upon Joining</h2>
              </Card.Title>
              <Card.Subtitle className="mt-2">
                <h6>
                  If you meet all requirements listed above, you may apply
                  through this{" "}
                  <a
                    className="link"
                    href="https://forms.gle/cMUA1B2hcHeH7DYh6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Form!
                  </a>
                </h6>
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  After you have submitted your application, you will see a link
                  to another form, which will be a Theoretical Test that will
                  test your knowledge of Flying in Infinite Flight. <br />
                  <br />
                  Upon submitting the Theory Test, A Staff Member will contact
                  you within 12-24 hours.
                  <br />
                  <br />
                  If you passed the Test, you will be Invited to our Discord
                  Server (<em>It is mandatory to join the Discord Server.</em>
                  )
                  <br />
                  <br />
                  However, if you do not pass the Test, you will have 1 week to
                  do a retest.
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ fontSize: "0.93rem" }}>
              We reccommend checking out{" "}
              <a
                href="https://infiniteflight.com/guide/"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Infinite Flight's Official User Guide{" "}
                <i className="fas fa-link" />
              </a>{" "}
              for preparation.
            </Card.Footer>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default apply;
