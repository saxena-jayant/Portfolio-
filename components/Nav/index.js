import React, { useState, useEffect } from "react";
import classes from "./Nav.module.scss";
import Image from "next/image";
import { ROUTES } from "@/shared/routes";
import Link from "next/link";
import Resume from "../../components/Resume";

const Nav = ({ textEnter, textLeave, selectedSection, setSelectedSection }) => {
  const [links] = useState([
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" },
  ]);

  return (
    <header id="header" className={"container " + classes.container}>
      <div
        style={{
          top: "0px",
          position: "absolute",
          height: "100%",
          width: "100vw",
          left: `calc((-100vw + 100%) / 2)`,
          zIndex: "10px",
          backdropFilter: "blur(10px)",
        }}
      />
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Image
            src="/images/Frame.svg"
            alt=""
            width={60}
            height={60}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            onClick={() => setSelectedSection("About")}
          />
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
                  onClick={() => {
                    setSelectedSection(item.name);
                    document
                      .getElementById("navbarNav")
                      .classList.remove("show");
                  }}
                >
                  <p
                    className="mb-0 font-14 font-gray-2 px-3 py-2"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                    style={
                      item.name === selectedSection ? { fontWeight: "600" } : {}
                    }
                  >
                    {item.name}
                  </p>
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
