import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "@/shared/routes";

const index = () => {
  return (
    <div
      className="container-xxl font-gray-2"
      style={{ padding: "0px 100px", maxWidth: "1150px", marginTop: "100px" }}
    >
      <p
        className="font-48"
        style={{
          fontFamily: "Neurial-Extrabold",
          margin: "16px 0px",
        }}
      >
        Projects.
      </p>
    </div>
  );
};

export default index;
