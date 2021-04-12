import staffList from "../../../../data/StaffList";
import Head from "next/head";
import Layout from "../../../../components/Layout/Layout";
import { Container } from "react-bootstrap";

const staffMember = ({ member, memberAvatar }) => {
  member = member[0];
  return (
    <>
      <Head>
        <title>Finnair Virtual | Staff - {member.name}</title>
      </Head>
      <Layout>
        <Container>
          <div className="staff-member-wrapper my-4">
            <div className="staff-member-container">
              <img src={memberAvatar} className="pfp my-3" />

              <h1 className="text-center">{member.name}</h1>
              <h6 className="text-muted text-center">
                <i className="fas fa-map-marker-alt" /> {member.location}
              </h6>
              <h6 className="text-center" style={{ color: "#0b1560" }}>
                <i className="fas fa-check" /> Junior Management
              </h6>
              <h6 className="text-center" style={{ color: "#0b1560" }}>
                <i className="fas fa-check" /> {member.role}
              </h6>
              <p className="text-center staff-member-bio my-2">{member.desc}</p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default staffMember;

export async function getStaticProps({ params }) {
  //Filter the junior management array and return it as a prop

  let member = staffList.juniorManagement.filter((mem) => mem.id == params.id);
  const res = await fetch(
    `https://community.infiniteflight.com/u/${member[0].ifcName}.json`
  );
  const data = await res.json();
  const memberAvatar = `https://sjc6.discourse-cdn.com/infiniteflight${data.user.avatar_template}`.replace(
    "{size}",
    "150"
  );

  return {
    props: {
      member,
      memberAvatar,
    },
  };
}

export async function getStaticPaths() {
  // define all possible paths
  const paths = staffList.juniorManagement.map((mem) => {
    return { params: { id: mem.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
