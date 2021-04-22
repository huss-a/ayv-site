import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Form, Container, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

const register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [callsign, setCallsign] = useState<string>("");
  const [alert, setAlert] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  if (alert) setTimeout(() => setAlert(null), 3000);

  async function registerUser(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      callsign,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    setLoading(true);
    const res = await axios.post(
      "https://ayv-site.herokuapp.com/register",
      data,
      config
    );
    setLoading(false);
    setAlert(res.data);

    const clearInputs = () => {
      setName("");
      setEmail("");
      setPassword("");
      setCallsign("");
    };
    clearInputs();
  }
  useEffect(() => {
    const foo = async () => {
      const res = await axios.get("https://ayv-site.herokuapp.com/user", {
        withCredentials: true,
      });
      console.log(res.data);
    };
    (async () => await foo())();
  });
  return (
    <>
      <Head>
        <title>Finnair Virtual | Register</title>
      </Head>
      <div className="reg-login-wrapper">
        <Container className="m-4 p-5 reg-login-form">
          <h1>Register</h1>
          <Form className="m-4" onSubmit={(e) => registerUser(e)}>
            {alert ? <Alert variant={"success"}>{alert}</Alert> : null}

            <Form.Group className="mb-4">
              <Form.Label>IFC Name</Form.Label>
              <Form.Control
                type="text"
                required={true}
                placeholder="Ex: Hardlanding_Hussain"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
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
            <Form.Group className="mb-4">
              <Form.Label>Callsign</Form.Label>
              <Form.Control
                type="text"
                required={true}
                placeholder="Finnair XXXVA"
                onChange={(e) => setCallsign(e.target.value)}
                value={callsign}
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

export default register;
