import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Container } from "react-bootstrap";

const briefing: React.FC = () => {
  interface Pilot {
    _id: string;
    ifcName: string;
    email: string;
    callsign: string;
    password: string;
  }
  const [pilot, setPilot] = useState<Pilot>({
    _id: "",
    ifcName: "",
    callsign: "",
    password: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const getLoggedInUser = async () => {
    try {
      console.log(loading);
      const res = await axios.get("https://ayv-site.herokuapp.com/user", {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getLoggedInUserOnRender = async () => {
      setLoading(true);
      const p = await getLoggedInUser();
      setPilot(p);
      setLoading(false);
    };

    getLoggedInUserOnRender(); // i suck at naming these
  }, []);
  return (
    <div className="m-4">
      {!loading ? (
        <Container>
          <div className="pilot">
            <h1>Welcome back {pilot.ifcName}!</h1>
          </div>
        </Container>
      ) : (
        <Spinner animation="grow" variant="primary" />
      )}
    </div>
  );
};

export default briefing;

// export async function getStaticProps() {}
