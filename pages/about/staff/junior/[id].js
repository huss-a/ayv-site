import staffList from "../../../../data/StaffList";
import Head from "next/head";
import Layout from "../../../../components/Layout/Layout";
import { Container, Button } from "react-bootstrap";
import { useRouter } from "next/router";

const staffMember = ({ member, memberAvatar }) => {
  member = member[0];
  const router = useRouter();

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
              <a
                href={`https://community.infinitelflight.com/u/${member.ifcName}`}
                className="link"
              >
                <h6>IFC Profile</h6>
              </a>
              <div className="social my-4">
                <h4>Social Links</h4>
                <div className="social-icons">
                  {member.social.yt && (
                    <a
                      className="link"
                      href={member.social.yt}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h4>
                        <i
                          className="fab fa-youtube mx-1"
                          style={{ color: "#0b1560" }}
                        />
                      </h4>
                    </a>
                  )}
                  {member.social.ig && (
                    <a
                      className="link"
                      href={member.social.ig}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h4>
                        <i
                          className="fab fa-instagram mx-1"
                          style={{ color: "#0b1560" }}
                        />
                      </h4>
                    </a>
                  )}
                </div>
              </div>
              <Button
                style={{ background: "#0b1560", border: "none" }}
                onClick={() => router.push("/about/staff")}
              >
                Staff Page
              </Button>
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
