import Head from "next/head";
import { Container, Card, Form, Button } from "react-bootstrap";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Finnair Virtual | Contact Us</title>
        <meta name="description" content="Finnair Virtual | Contact Us" />
      </Head>
      <Layout>
        <div className="contact-form-wrapper">
          <Container
            style={{ height: "100vh" }}
            className="contact-form-container"
          >
            <Card className="form-card animate__animated animate__fadeInRight">
              <div className="jumbotron mt-4 contact-form-header">
                <h2>Contact Us</h2>
                <h6>
                  Wanna get in touch with us?{" "}
                  <a
                    className="link"
                    href="https://community.infiniteflight.com/u/FinnairVA"
                  >
                    Shoot us a DM{" "}
                    <i id="envelope" className="fas fa-envelope" /> on the IFC
                  </a>{" "}
                  OR Fill out the form below!
                </h6>
              </div>
              <Card.Body>
                <Form name="contact-form" method="post" action="/send">
                  <input type="hidden" name="form-name" value="contact-form" />
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="Name">
                      IFC Name / Real Name <i className="fas fa-at"></i>
                    </Form.Label>
                    <Form.Control id="Name" name="Name" type="text" required />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="Email">
                      Email <i className="fas fa-inbox"></i>
                    </Form.Label>
                    <Form.Control
                      id="Email"
                      name="Email"
                      type="email"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label htmlFor="Message">
                      Message <i className="fas fa-comment-alt"></i>
                    </Form.Label>
                    <textarea
                      id="Message"
                      className="form-control"
                      name="Message"
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="mt-4">
                    Send
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
