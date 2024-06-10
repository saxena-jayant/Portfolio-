"use client";

import React, { useEffect, useState } from "react";
import Cursor from "@/components/Cursor/Cursor";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import classes from "./page.module.scss";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [followVariant, setFollowVariant] = useState("follow");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: {
        type: "spring",
        stiffness: 1500,
        damping: 140,
        mass: 1,
      },
    },
    zoom: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      transition: {
        type: "spring",
        stiffness: 1500,
        damping: 50,
        mass: 1,
      },
      height: 16,
      width: 16,
      border: "2px solid white",
      backgroundColor: "#aaaaaa",
    },
    follow: {
      x: mousePosition.x - 42,
      y: mousePosition.y - 42,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 100,
        mass: 2,
      },
    },
    vanish: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 50,
        mass: 2,
      },
      height: 0,
      width: 0,
      opacity: 0,
      border: 0,
    },
  };

  const textEnter = () => {
    setCursorVariant("zoom");
    setFollowVariant("vanish");
  };
  const textLeave = () => {
    setCursorVariant("default");
    setFollowVariant("follow");
  };

  return (
    <section
      className={classes.main}
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className={classes.grid} />
      <Nav textEnter={textEnter} textLeave={textLeave} />
      <Cursor
        variants={variants}
        cursorVariant={cursorVariant}
        followVariant={followVariant}
      />
      <Main />
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
  );
}
