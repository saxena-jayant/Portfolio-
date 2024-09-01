import React from "react";
import { motion } from "framer-motion";
import { ROUTES } from "@/shared/routes";
import { getTransitions } from "@/utils";
import Link from "next/link";
import classes from "../Main/Main.module.scss";

const index = ({ textEnter, textLeave, setSelectedSection }) => {
  return (
    <div
      className={"container-xxl font-gray-2 " + classes.mobileView}
      style={{ padding: "0px 100px", maxWidth: "1150px", marginTop: "70px" }}
    >
      <p
        className="font-48"
        style={{
          fontFamily: "Neurial-Extrabold",
          margin: "16px 0px",
        }}
      >
        Contact.
      </p>
      <p
        className="mb-0 font-15"
        style={{
          fontFamily: "Neurial-Regular",
        }}
      >
        Get in touch or shoot me an email directly on{" "}
        <span
          style={{
            fontFamily: "Neurial-Bold",
          }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          onClick={(e) => {
            window.location.href = "mailto:hello.jayantsaxena@gmail.com";
            e.preventDefault();
          }}
        >
          hello.jayantsaxena@gmail.com
        </span>
      </p>
      <form
        action="https://formspree.io/f/xrbzbkbr"
        method="POST"
        style={{
          width: "56%",
          marginTop: "30px",
          fontFamily: "Neurial-Regular",
        }}
        className={classes.mobileViewForm}
      >
        <input
          type="text"
          name="name"
          className="px-4 text-white w-100 py-2"
          style={{
            background: "transparent",
            border: "1px solid #14202b",
            outline: "none",
            borderRadius: "4px",
          }}
          placeholder="Name"
          aria-required={true}
          required
        />
        <input
          type="email"
          name="email"
          className="px-4 text-white w-100 py-2 mt-4"
          style={{
            background: "transparent",
            border: "1px solid #14202b",
            outline: "none",
            borderRadius: "4px",
          }}
          placeholder="Email"
          aria-required={true}
          required
        />
        <textarea
          type="text"
          name="message"
          className="px-4 text-white w-100 py-2 mt-4"
          style={{
            background: "transparent",
            border: "1px solid #14202b",
            outline: "none",
            resize: "none",
            height: "140px",
            borderRadius: "4px",
          }}
          placeholder="Message"
          aria-required={true}
          required
        />
        <button
          className="mt-4 bg-gray-2 font-15"
          style={{ padding: "14px 40px", borderRadius: "6px" }}
          type="submit"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Send Message
        </button>
      </form>

      <motion.div {...getTransitions(0.7)} className={"mt-5"}>
        <div className={classes.footer}>
          <div onClick={() => setSelectedSection("About")}>
            <span
              className="mb-0 font-16 font-gray-2"
              style={{ fontFamily: "Neurial-Regular" }}
            >
              Go Back Home
            </span>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#c6c6c6"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
