import { Container } from "react-bootstrap";

const CEOMessage = () => {
  return (
    <div className="ceo-msg-container my-4">
      <Container>
        <h1 className="text-center my-4">The CEO's message.</h1>

        <p>
          Hello! I’m Gabriel, and I’m the CEO of Finnair Virtual. I’ve been in
          the VA since the start and the CEO since November 2020. I have loved
          aviation since I first saw a plane, 10 years ago. In AYVA, we strive
          to create a professional and friendly experience, and we want to
          become one of the biggest VAs in Infinite Flight. So what are you
          waiting for? Come Fly Finnish with us!
        </p>
      </Container>
    </div>
  );
};

export default CEOMessage;
