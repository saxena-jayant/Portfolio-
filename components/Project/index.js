import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ROUTES } from "@/shared/routes";
import { getTransitions } from "@/utils";
import classes from "../Main/Main.module.scss";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      title: "Zooco",
      desc: "Zooco is a platform for preventive pet care that helps pet parents understand their dog's health and wellness needs.",
      languages: [
        "Next.js",
        "CSS & Sass",
        "Node.js & Express.js",
        "Web socket",
        "MySQL",
      ],
      project_link: "https://app.zooco.pet/",
      secondary_desc: "Live On Play Store",
      secondary_link:
        "https://play.google.com/store/apps/details?id=pet.zooco.app.twa",
    },
    {
      title: "TodoList",
      desc: "MERN App to organize your daily tasks. This app provides a user-friendly interface to manage and track your to-do items efficiently.",
      languages: ["React.js", "CSS", "Express.js", "MongoDB"],
      project_link: "https://todo-list-six-sand.vercel.app/",
    },
  ]);

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
        Projects.
      </p>
      <div className="d-flex flex-wrap" style={{ gap: "24px" }}>
        {projects.map((item, i) => (
          <div
            key={i}
            className="px-4 py-3"
            style={{
              border: "1px solid #14202b",
              maxWidth: "400px",
              borderRadius: "14px",
              background: "#080f18",
            }}
          >
            <p
              className="font-24 mb-0 font-white"
              style={{ fontFamily: "Neurial-Bold", lineHeight: "24px" }}
            >
              {item.title}
            </p>
            <p
              className="font-14 mb-0 font-white mt-3"
              style={{ fontFamily: "Neurial-Regular" }}
            >
              {item.desc}
            </p>
            <div
              className="d-flex align-items-center flex-wrap mt-3 mb-3"
              style={{ gap: "8px" }}
            >
              {item.languages.map((each, e) => (
                <p
                  key={e}
                  className="font-12 mb-0 font-white"
                  style={{
                    padding: "4px 10px",
                    background: "#696869",
                    borderRadius: "50px",
                    lineHeight: "18px",
                  }}
                >
                  {each}
                </p>
              ))}
            </div>
            <Link
              href={item.project_link}
              className={classes.contact}
              target="_blank"
            >
              <div className="d-flex align-items-center">
                <p
                  className="font-14 mb-0"
                  style={{ fontFamily: "Neurial-Bold" }}
                >
                  Project Link
                </p>
                <img
                  src="./images/link.svg"
                  alt=""
                  className="position-relative"
                  style={{ width: "18px", left: "0.7rem" }}
                />
              </div>
            </Link>
            {item.secondary_link && (
              <Link
                href={item.secondary_link}
                className={classes.contact}
                target="_blank"
              >
                <div className="d-flex align-items-center mt-3">
                  <p
                    className="font-14 mb-0"
                    style={{ fontFamily: "Neurial-Bold" }}
                  >
                    {item.secondary_desc}
                  </p>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <motion.div {...getTransitions(0.7)} className={"mt-5"}>
        <div className={classes.footer}>
          <Link href={ROUTES.CONTACT.path} style={{ textDecoration: "none" }}>
            <span
              className="mb-0 font-16 font-gray-2"
              style={{ fontFamily: "Neurial-Regular" }}
            >
              Ready to contact me now ?
            </span>
          </Link>
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
      </motion.div>
    </div>
  );
};

export default Project;
