import React from "react";
import classes from "./Cursor.module.scss";
import { motion } from "framer-motion";

const Cursor = ({ showPointer, variants, cursorVariant, followVariant }) => {
  return (
    <div style={showPointer ? { opacity: "1" } : { opacity: "0" }}>
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
