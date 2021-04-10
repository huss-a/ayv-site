import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "Finnair Virtual | 404 Not Found";
  });
  return (
    <Container className="not-found-container">
      <div className="not-found">
        <div className="not-found-left">
          <h1>Not Found</h1>
        </div>
        <div className="not-found-right">
          <h4>
            Looks like you're lost, go back to the{" "}
            <Link to="/" className="link">
              Homepage
            </Link>
            ?
          </h4>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
