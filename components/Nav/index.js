import React, { useEffect, useState } from "react";
import classes from "./Nav.module.scss";
import Image from "next/image";
import { ROUTES } from "@/shared/routes";
import Link from "next/link";

const index = ({ textEnter, textLeave }) => {
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
            <ul className="navbar-nav">
              {links.map((item, i) => (
                <Link href={item.path} style={{ textDecoration: "none" }}>
                  <li
                    key={i}
                    className={"nav-item position-relative " + classes.link}
                  >
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
                    <div className={classes.underline} />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
