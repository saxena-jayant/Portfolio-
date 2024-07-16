import React from "react";
import axios from "axios";
import Image from "next/image";
import classes from "./Resume.module.scss";

const index = ({ textEnter, textLeave }) => {
  const resume = "/Resume.pdf";

  const handleDownload = () => {
    axios({
      url: resume,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", resume.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <button
      className={
        "ps-3 font-medium d-flex align-items-center " + classes.download
      }
      style={{ borderRadius: "4px", transition: "0.2s all ease-in" }}
      onClick={() => handleDownload()}
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      Resume
      <Image
        src="/images/download.svg"
        width={26}
        height={26}
        style={{ paddingLeft: "4px" }}
      />
    </button>
  );
};

export default index;
