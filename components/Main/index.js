import React from "react";
import { motion } from "framer-motion";
import { getTransitions } from "@/utils";
import classes from "./Main.module.scss";
import Link from "next/link";
import { ROUTES } from "@/shared/routes";

const index = ({ setSelectedSection }) => {
  return (
    <div className={"container-xxl font-gray-2 " + classes.mobileView}>
      <motion.h1
        data-text="I'M JAYANT SAXENA"
        className="intro__text"
        {...getTransitions(0.1)}
        style={{
          fontFamily: "Neurial-Medium",
        }}
      >
        <p
          className=""
          style={{
            fontFamily: "Neurial-Medium",
            letterSpacing: "10px",
          }}
        >
          I&apos;M JAYANT SAXENA
        </p>
      </motion.h1>
      <motion.p
        className="mb-0 font-16 font-gray-2"
        style={{ fontFamily: "Neurial-Regular", lineHeight: "34px" }}
        {...getTransitions(0.3)}
      >
        Your friendly neighborhood MERN developer and JavaScript engineer. I
        spend my days (and often nights) painting the Internet canvas with
        <span
          className={"font-15 " + classes.project}
          style={{ fontFamily: "Neurial-Bold" }}
          onClick={() => setSelectedSection("Projects")}
        >
          {" "}
          PROJECTS{" "}
        </span>{" "}
        and lines of code, turning zeroes and ones into immersive, interactive
        experiences.
      </motion.p>
      <motion.p
        className="mb-0 font-16 font-gray-2 mt-4"
        style={{ fontFamily: "Neurial-Regular", lineHeight: "34px" }}
        {...getTransitions(0.5)}
      >
        With a keen eye for detail and a dedication to continuous learning, I
        stay updated with the latest technologies and trends. I enjoy
        collaborating with teams and clients to deliver exceptional digital
        solutions that not only meet but exceed expectations. My goal is to
        create seamless, user-friendly applications that leave a lasting
        impression. Anyways you can
        <span
          className={"font-15 " + classes.contact}
          style={{ fontFamily: "Neurial-Bold" }}
          onClick={() => setSelectedSection("Contact")}
        >
          {" "}
          CONTACT ME
        </span>
      </motion.p>
      <motion.div {...getTransitions(0.7)} className={"mt-4"}>
        <div className={classes.footer}>
          <div onClick={() => setSelectedSection("Projects")}>
            <span
              className="mb-0 font-16 font-gray-2"
              style={{ fontFamily: "Neurial-Regular" }}
            >
              Lets Continue To Projects
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

        <div
          className="d-flex align-items-center"
          style={{ gap: "24px", marginTop: "30px" }}
        >
          <Link
            href="https://github.com/saxena-jayant"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#c6c6c6"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/saxena-jayant/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#c6c6c6"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link>
          <Link
            href="https://www.instagram.com/ysh_saxena"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#c6c6c6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
