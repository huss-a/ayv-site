import React from "react";
import { Card, Button } from "react-bootstrap";
import { OneWorldPartners } from "../../data/Partners";
import banner from "../../images/OneWorldVirtual.jpg";

const OneWorldCard = () => {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Img alt="OneWorld Banner" src={banner} />
        </Card.Header>
        <Card.Body>
          <>
            <div className="ow-grid">
              {OneWorldPartners.map((partner, idx) => (
                <Card
                  className="p-4 m-2"
                  style={{
                    borderRadius: "5px",
                    borderTop: `7px solid ${partner.color}`,
                  }}
                  key={partner.website}
                  data-aos="zoom-in"
                  data-aos-delay={`${idx * 100}`}
                  data-aos-once="true"
                >
                  <Card.Header style={{ background: "#fff" }}>
                    <Card.Title>
                      <h4>{partner.name}</h4>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body style={{ borderRadius: "5px" }}>
                    {partner.description}
                  </Card.Body>
                  <a target="_blank" href={partner.website}>
                    <Button
                      className="mt-3"
                      style={{ background: "#0b1560", border: "none" }}
                    >
                      <i className="fas fa-plane" /> Website
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </>
        </Card.Body>
        <Card.Footer>
          <strong>
            OneWorld Virtual holds NO affiliation with OneWorld whatsoever.
          </strong>
        </Card.Footer>
      </Card>
    </>
  );
};

export default OneWorldCard;
