import staffList from "../../../../data/StaffList";
import Head from "next/head";
import Layout from "../../../../components/Layout/Layout";
import { Container } from "react-bootstrap";

const staffMember = ({ member }) => {
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
              <h1 className="text-center">{member.name}</h1>
              <h6 className="text-muted text-center">
                <i className="fas fa-map-marker-alt" /> {member.location}
              </h6>
              <h6 className="text-center">
                <i className="fas fa-check" /> Senior Management
              </h6>
              <p className="text-center staff-member-bio">{member.desc}</p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default staffMember;

export function getStaticProps({ params }) {
  //Filter the senior management array and return it as a prop

  const member = staffList.seniorManagement.filter(
    (mem) => mem.id == parseInt(params.id)
  );

  return {
    props: {
      member,
    },
  };
}

export async function getStaticPaths() {
  // define all possible paths
  const paths = staffList.seniorManagement.map((mem) => {
    return { params: { id: mem.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
