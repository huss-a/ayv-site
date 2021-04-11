import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a
          className="navbar-brand animate__animated animate__flip"
          style={{ color: "white" }}
          onClick={() => router.push("/")}
          style={{ cursor: "pointer" }}
        >
          <h4>Finnair Virtual</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto mb-3 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={() => router.push("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => router.push("/about/staff")}
                  >
                    Staff
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => router.push("/about/partners")}
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => router.push("/about/contact")}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => router.push("/fleet")}>
                Fleet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => router.push("/apply")}>
                Apply
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href="http://iffinnairva.rf.gd"
                rel="noreferrer"
              >
                Crew Center
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
