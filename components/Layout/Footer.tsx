import { Button } from "react-bootstrap";
import scrollUp from "../../helpers/scrollUp";

const Footer: React.FC = () => {

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <h4 className="text-center">Links</h4>
          <ul>
            <li>
              <h5>
                <a
                  href="https://forms.gle/crjLD6UsTKuPy7ay7"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-wpforms"></i> Apply Today
                </a>
              </h5>
            </li>
            <li>
              <h5>
                <a
                  href="https://www.instagram.com/finnair_va/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </h5>
            </li>

            <li>
              <h5>
                <a
                  href="https://community.infiniteflight.com/u/finnairva"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-infinity"></i> IFC Account
                </a>
              </h5>
            </li>

            <li>
              <h5>
                <a
                  href="https://community.infiniteflight.com/t/finnair-virtual-new-year-new-thread-official-2021-thread/534688"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-scroll"></i> IFC Thread
                </a>
              </h5>
            </li>
          </ul>
        </div>
        <div className="footer-main-content mb-4">
          <p className="text-center">
            Finnair Virtual Airline is in no way affiliated with, endorsed with,
            or sponsored by Finnair. <br /> For the official Finnair Website,
            please{" "}
            <a
              href="https://www.finnair.com/"
              rel="noreferrer"
              className="link"
            >
              click here
            </a>
            .
          </p>
        </div>
      </div>
      <div
        className="copyright"
        style={{
          background: "#0b1560",
          margin: "0px 0px 0px 0px",
          color: "white",
        }}
      >
        <h6 style={{ margin: "0px" }} className="text-center text-muted">
          &copy; Finnair Virtual 2021
        </h6>
        <div className="scroll-up">
          <Button className="text-center" id="scroll-up-btn" onClick={() => scrollUp()}>
            ☝
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
