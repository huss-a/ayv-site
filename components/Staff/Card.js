import { Card } from "react-bootstrap";

const StaffCard = ({ staffMember, borderColor }) => {
  const cardStyles = {
    borderRadius: "1px 1px 10px 10px",
    borderTop: `7px solid ${borderColor}`,
  };

  const cardTitleStyles = {
    fontSize: "2rem",
    fontFamily: "'Caveat', cursive",
    fontWeight: "700",
  };
  return (
    <Card className="m-4 p-2" style={cardStyles}>
      <Card.Header>
        <Card.Title style={cardTitleStyles}>{staffMember.name}</Card.Title>
        <Card.Subtitle>{staffMember.role}</Card.Subtitle>
      </Card.Header>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
        <Card.Text>{staffMember.desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link>
          <h6>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href={`https://community.infiniteflight.com/u/${staffMember.ifcName}`}
            >
              Contact me on the IFC!
            </a>
          </h6>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default StaffCard;
