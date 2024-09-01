"use client";

import React, { useEffect, useState, useRef } from "react";
import Cursor from "@/components/Cursor/Cursor";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import classes from "./page.module.scss";
import Transition from "@/components/Transition";

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };
};

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [followVariant, setFollowVariant] = useState("follow");
  const [selectedSection, setSelectedSection] = useState("About");
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    if (selectedSection === "About") {
      about.current.scrollIntoView();
    }
    if (selectedSection === "Projects") {
      projects.current.scrollIntoView();
    }
    if (selectedSection === "Contact") {
      contact.current.scrollIntoView();
    }
  }, [selectedSection]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const aboutSection = about.current;
      const projectsSection = projects.current;
      const contactSection = contact.current;

      if (aboutSection && projectsSection && contactSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const projectsRect = projectsSection.getBoundingClientRect();
        const contactRect = contactSection.getBoundingClientRect();

        if (
          aboutRect.top <= window.innerHeight / 2 &&
          aboutRect.bottom >= window.innerHeight / 2
        ) {
          setSelectedSection("About");
        } else if (
          projectsRect.top <= window.innerHeight / 2 &&
          projectsRect.bottom >= window.innerHeight / 2
        ) {
          setSelectedSection("Projects");
        } else if (
          contactRect.top <= window.innerHeight / 2 &&
          contactRect.bottom >= window.innerHeight / 2
        ) {
          setSelectedSection("Contact");
        }
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textEnter = () => {
    setCursorVariant("zoom");
    setFollowVariant("vanish");
  };
  const textLeave = () => {
    setCursorVariant("default");
    setFollowVariant("follow");
  };

  return (
    <Transition>
      <section style={{ width: "100vw", minHeight: "100vh" }}>
        <div className={classes.grid} />
        <Nav
          textEnter={textEnter}
          textLeave={textLeave}
          selectedSection={selectedSection}
          setSelectedSection={(data) => setSelectedSection(data)}
        />
        <Cursor cursorVariant={cursorVariant} followVariant={followVariant} />
        <div ref={about}>
          <Main setSelectedSection={(data) => setSelectedSection(data)} />
        </div>
        <div ref={projects}>
          <Project setSelectedSection={(data) => setSelectedSection(data)} />
        </div>
        <div ref={contact}>
          <Contact
            textEnter={textEnter}
            textLeave={textLeave}
            setSelectedSection={(data) => setSelectedSection(data)}
          />
        </div>
        <p
          className="position-fixed font-blue"
          style={{
            fontFamily: "Abril FatFace",
            fontSize: "29vmin",
            letterSpacing: "-0.3rem",
            opacity: "1",
            zIndex: "-1",
            bottom: "0px",
          }}
        >
          JS.
        </p>
      </section>
    </Transition>
  );
}
