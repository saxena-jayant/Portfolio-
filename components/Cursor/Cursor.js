import React, { useState, useEffect } from "react";
import classes from "./Cursor.module.scss";
import { motion } from "framer-motion";

const Cursor = ({ cursorVariant, followVariant }) => {
  const [mousePosition, setMousePosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const [showPointer, setShowPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      setShowPointer(true);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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

  return (
    <div
      className={classes.mobileView}
      style={
        showPointer
          ? { opacity: "1", position: "fixed", zIndex: "1000" }
          : { opacity: "0" }
      }
    >
      <motion.div
        className={classes.cursor}
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className={classes.follow}
        variants={variants}
        animate={followVariant}
      />
    </div>
  );
};

export default Cursor;
