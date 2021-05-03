import { Card, Accordion, Button, ListGroup } from "react-bootstrap";

const FleetCard = ({ aircraft }) => {
  return (
    <Card className="my-4" data-aos="zoom-in" data-aos-once="true">
      <Card.Img variant="top" src={aircraft.img} />
      <Card.Header>
        <Card.Title>
          <h3>{aircraft.name}</h3>
        </Card.Title>
      </Card.Header>
      <Accordion> {/* Accordions enable toggling */}
        <Card.Body>
          <Accordion.Toggle
            style={{ display: "grid", placeItems: "center" }}
            as={Button}
            variant="link"
            eventKey="0"
            className="my-2"
          >
            <h6>Aircraft Specs</h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ListGroup>
              <ListGroup.Item>
                Wingspan: {aircraft.specs.wingspan}m
              </ListGroup.Item>
              <ListGroup.Item>
                Max Passengers: {aircraft.specs.maxPax}
              </ListGroup.Item>
              <ListGroup.Item>
                Max Cargo: {aircraft.specs.maxCargo} KGs
              </ListGroup.Item>
              <ListGroup.Item>
                Range: {aircraft.specs.range}nm
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Collapse>
        </Card.Body>
      </Accordion>
      <Card.Footer>Mainly used for {aircraft.role}.</Card.Footer>
    </Card>
  );
};

export default FleetCard;
