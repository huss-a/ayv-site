import Head from "next/head";
import { useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";

const login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alert, setAlert] = useState<string | null>(null);
  if (alert) setTimeout(() => setAlert(null), 3000);
  async function loginUser(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    const res = await axios({
      method: "POST",
      data: {
        email,
        password,
      },
      withCredentials: true,
      url: "https://ayv-site.herokuapp.com/login",
    });

    setAlert(res.data);
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
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required={true}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default login;
