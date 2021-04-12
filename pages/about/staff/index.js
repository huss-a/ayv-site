import { Container } from "react-bootstrap";
import StaffCard from "../../../components/Staff/Card";
import staffMembers from "../../../data/StaffList";
import Layout from "../../../components/Layout/Layout";
import Head from "next/head";
const staff = () => {
  return (
    <>
      <Head>
        <title>Finnair Virtual | Staff</title>
        <meta name="description" content="Finnair Virtual - Staff" />
      </Head>
      <Layout>
        <Container>
          <h1 className="mt-4">The Staff at AYVA</h1>
          <hr />
          <div style={centerDivStyle}>
            <h2>Senior Management</h2>
            <div className="staff-card-container">
              {staffMembers.seniorManagement.map((member) => (
                <>
                  <StaffCard
                    key={member.name}
                    className="mb-4"
                    staffMember={member}
                    status="senior"
                  />
                </>
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
                  status="junior"
                />
              ))}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

const centerDivStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const hrStyle = { border: "1px solid #000", width: "80%" };
export default staff;
