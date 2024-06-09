import React from "react";
import classes from "./Cursor.module.scss";
import { motion } from "framer-motion";

const Cursor = ({ variants, cursorVariant, followVariant }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Cursor;
