import Head from "next/head";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios, { AxiosRequestConfig } from "axios";
import DiscordSVG from "../../images/logos/Discord.svg";

const login: React.FC = () => {
  // states
  const [alert, setAlert] = useState<string>(null);
  const [loading, setLoading] = useState(false);

  const loginUser = () => {
    window.location.href = process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login";
  };

  async function logoutUser() {
    setLoading(true);
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/logout",
      null,
      config
    );
    setLoading(false);
    setAlert(res.data.msg);
  }

  return (
    <>
      <Head>
        <title>Finnair Virtual | Login</title>
        <meta
          name="description"
          content="Finnair Virtual - Pilot Discord Login"
        />
      </Head>
      <div className="login-container container">
        <Card
          className="login-card info-card animate__animated animate__backInUp"
          data-aos="flip-up"
          data-aos-once="true"
        >
          <Card.Header>
            <Card.Title as="h2">Pilot Login</Card.Title>
          </Card.Header>
          <Card.Body className="py-4">
            <p>
              On clicking the "Login with Discord" button, you'll be redirected
              to a Login Page provided by Discord, there you must Sign up with
              the same Discord account as in the VA.
            </p>
            <Button onClick={loginUser} style={{ background: "#4857ff" }}>
              Login with{" "}
              <img
                style={{ height: "30px" }}
                src={DiscordSVG}
                alt="discord logo"
              />
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default login;
