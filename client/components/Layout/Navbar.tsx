import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";

const Navbar: React.FC = () => {
  const router = useRouter();
  // const userObject = useContext(authContext);
  const logoutUser = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`);
  };
  useEffect(() => {
    const navLinks = document.querySelectorAll<HTMLLIElement>(".nav-item");

    const dropdownLinks = document.querySelectorAll<HTMLLIElement>(
      ".dropdown-item"
    );
    const navbarCollapse = document.querySelector<HTMLDivElement>(
      ".navbar-collapse"
    );
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
      });
    });

    dropdownLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
      });
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a
          className="navbar-brand animate__animated animate__flip"
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => router.push("/")}
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
                className="nav-link"
                aria-current="page"
                onClick={() => router.push("/")}
                id="nav-home"
              >
                Home
              </a>
            </li>
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle nav-about"
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
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle nav-about"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pilots
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => router.push("/pilots/login")}
                  >
                    Login / Logout
                  </a>
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => router.push("/pilots/register")}
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => router.push("/pilots/briefing")}
                  >
                    Briefing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-fleet"
                onClick={() => router.push("/fleet")}
              >
                Fleet
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-apply"
                onClick={() => router.push("/apply")}
              >
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
