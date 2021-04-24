import Head from "next/head";
import { useState } from "react";
import { Form, Container, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  if (alert) setTimeout(() => setAlert(null), 3000);
  async function loginUser(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        "token": process.env.NEXT_PUBLIC_AUTH_TOKEN
      },
      withCredentials: true,
    };

    setLoading(true);
    const res = await axios.post(
      "https://ayv-site.herokuapp.com/login"/*http://localhost:5000/login"*/,
      data,
      config
    );
    setLoading(false);
    setAlert(res.data);

    const clearInputs = () => {
      setEmail("");
      setPassword("");
    };
    clearInputs();
  }
  return (
    <>
      <Head>
        <title>Finnair Virtual | Login</title>
      </Head>
      <div className="reg-login-wrapper">
        <Container className="m-4 p-5 reg-login-form">
          <h1>Login</h1>
          <Form className="m-4" onSubmit={(e) => loginUser(e)}>
            {alert ? (
              <Alert
                variant={
                  alert === "Successfully Logged in!" ? "success" : "warning"
                }
              >
                {alert}
              </Alert>
            ) : null}
            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required={true}
                placeholder="example@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required={true}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                minLength={6}
              />
            </Form.Group>
            <Button type="submit">
              {loading && (
                <Spinner
                  animation="grow"
                  style={{ position: "relative", bottom: "5px" }}
                  variant="primary"
                  size="sm"
                />
              )}{" "}
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default login;
