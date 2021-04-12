import { Card, ListGroup } from "react-bootstrap";
import { normalPartners } from "../../data/Partners";

const NormalPartnersCard = () => {
  return (
    <>
      <Card className="my-4">
        <Card.Header>
          <Card.Title as="h2">Other Partners</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text as="h6">
            Finnair Virtual also partners with many Virtual Airlines that are
            not OneWorld members.
          </Card.Text>
          <div>
            <ListGroup>
              {normalPartners.sort().map((partner) => (
                <ListGroup.Item><a href={partner.website}>{partner.name}</a></ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Card.Body>
        <Card.Footer>
          <strong>
            All Virtual Airlines mentioned hold NO affiliation with a real world
            airline whatsoever.
          </strong>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NormalPartnersCard;
