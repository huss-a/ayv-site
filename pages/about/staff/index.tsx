import { Container } from "react-bootstrap";
import StaffCard from "../../../components/Staff/Card";
import staffMembers from "../../../data/StaffList";
import Head from "next/head";
import { useEffect } from "react";
import { Staff } from "../../../types/StaffList";

const staff: React.FC = () => {
  useEffect(() => {
    document
      .querySelector<HTMLAnchorElement>(".nav-about")
      .classList.add("active");
    return () =>
      document
        .querySelector<HTMLAnchorElement>(".nav-about")
        .classList.remove("active");
  }, []);
  return (
    <>
      <Head>
        <title>Finnair Virtual | Staff</title>
        <meta name="description" content="Finnair Virtual - Staff" />
      </Head>

      <Container>
        <h1 className="mt-4">The Staff at AYVA</h1>
        <hr />
        <div style={centerDivStyle}>
          <h2>Senior Management</h2>
          <div className="staff-card-container">
            {staffMembers.seniorManagement.map((member: Staff, idx) => (
              <>
                <StaffCard
                  key={member.name}
                  staffMember={member}
                  status="senior"
                  idx={idx}
                />
              </>
            ))}
          </div>
          <hr style={hrStyle} />
          <h2>Junior Management</h2>
          <div className="staff-card-container">
            {staffMembers.juniorManagement.map((member: Staff, idx) => (
              <StaffCard
                key={member.name}
                staffMember={member}
                status="junior"
                idx={idx}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

const centerDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
} as const;

const hrStyle = { border: "1px solid #000", width: "80%" } as const;

export default staff;
