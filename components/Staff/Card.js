import { useRouter } from "next/router";
import { Button, Card } from "react-bootstrap";

const StaffCard = ({ staffMember, status, idx }) => {
  const cardTitleStyles = {
    fontSize: "2rem",
    fontFamily: "'Caveat', cursive",
    fontWeight: "700",
  };

  const btnStyles = {
    padding: "4px 7px",
    marginLeft: "10px",
    backgroundColor: "#0b1560",
    border: "4px #0b1560",
  };
  const router = useRouter();
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay={`${idx * 100}`}
      data-aos-once="true"
      className="staff-card"
    >
      <Card.Header>
        <Card.Title style={cardTitleStyles}>{staffMember.name}</Card.Title>
        <Card.Subtitle>{staffMember.role}</Card.Subtitle>
      </Card.Header>
      <Card.Body style={{ display: "flex", alignItems: "center" }}>
        <Card.Text>{staffMember.desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <h6>
          <Button
            target="_blank"
            rel="noreferrer"
            href={`https://community.infiniteflight.com/u/${staffMember.ifcName}`}
            style={btnStyles}
          >
            Contact me on the IFC!
          </Button>
          <Button
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              router.push(`/about/staff/${status}/${staffMember.id}`)
            }
            style={btnStyles}
          >
            More Info
          </Button>
        </h6>
      </Card.Footer>
    </Card>
  );
};

export default StaffCard;
