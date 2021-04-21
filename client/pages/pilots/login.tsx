import Head from "next/head";
import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";

const login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  function loginUser(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        email,
        password,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) => console.log(res))
  }
  return (
    <>
      <Head>
        <title>Finnair Virtual | Login</title>
      </Head>
      <Container className="m-4 p-5 reg-login-form">
        <h1>Login</h1>
        <Form className="m-4" onSubmit={(e) => loginUser(e)}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required={true}
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required={true}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-3" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default login;
