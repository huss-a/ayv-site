import { useEffect } from "react";
import { Container } from "react-bootstrap";
import StaffCard from "./Card";
import staffMembers from "../../data/StaffList";
import Layout from "../Layout/Layout";
const Staff = () => {
  useEffect(() => {
    document.title = "Finnair Virtual | Staff";
  });
  return (
    <Layout>
      <Container>
        <h1 className="mt-4">The Staff at AYVA</h1>
        <hr />
        <div style={centerDivStyle}>
          <h2>Senior Management</h2>
          <div className="staff-card-container">
            {staffMembers.seniorManagement.map((member) => (
              <StaffCard
                key={member.name}
                className="mb-4"
                staffMember={member}
                borderColor="#0b1560"
              />
            ))}
          </div>
          <hr style={hrStyle} />
          <h2>Junior Management</h2>
          <div className="staff-card-container">
            {staffMembers.juniorManagement.map((member) => (
              <StaffCard
                key={member.name}
                className="mb-4"
                staffMember={member}
                borderColor="#3a4ac5"
              />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

const centerDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const hrStyle = { border: "1px solid #000", width: "80%" };
export default Staff;
