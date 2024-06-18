"use client";

import React, { useState } from "react";
import Cursor from "@/components/Cursor/Cursor";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import classes from "../page.module.scss";
import Transition from "@/components/Transition";

export default function Home() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [followVariant, setFollowVariant] = useState("follow");

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
      <section style={{ width: "100vw", height: "100vh" }}>
        <title>Projects | Jayant Saxena</title>
        <div className={classes.grid} />
        <Nav textEnter={textEnter} textLeave={textLeave} />
        <Cursor cursorVariant={cursorVariant} followVariant={followVariant} />
        <Project />
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
