import React, { useState, useEffect } from "react";
import classes from "./Nav.module.scss";
import Image from "next/image";
import { ROUTES } from "@/shared/routes";
import Link from "next/link";
import Resume from "../../components/Resume";

const Nav = ({ textEnter, textLeave }) => {
  const [links] = useState([
    { name: "About", path: ROUTES.ABOUT.path },
    { name: "Projects", path: ROUTES.PROJECT.path },
    { name: "Contact", path: ROUTES.CONTACT.path },
  ]);
  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => {
    const activeLink = window.location.pathname;
    if (activeLink === "/") {
      setSelectedLink("About");
    } else if (activeLink === "/projects") {
      setSelectedLink("Projects");
    } else if (activeLink === "/contact_me") {
      setSelectedLink("Contact");
    }
  }, []);

  return (
    <header className={"container " + classes.container}>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link href={ROUTES.ABOUT.path} style={{ textDecoration: "none" }}>
            <Image
              src="/images/Frame.svg"
              alt=""
              width={60}
              height={60}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className={"navbar-nav me-3 " + classes.mobileView}>
              {links.map((item, i) => (
                <li
                  key={i}
                  className={"nav-item position-relative " + classes.link}
                >
                  <Link href={item.path} style={{ textDecoration: "none" }}>
                    <p
                      className="mb-0 font-14 font-gray-2 px-3 py-2"
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      style={
                        item.name === selectedLink ? { fontWeight: "600" } : {}
                      }
                    >
                      {item.name}
                    </p>
                  </Link>
                  <div className={classes.underline} />
                </li>
              ))}
            </ul>
            <Resume textEnter={textEnter} textLeave={textLeave} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
