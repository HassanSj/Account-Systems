import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  footer: {
    marginLeft: "239px",
  },
  logo: {
    color: "blue",
    cursor: "pointer",
  },
};
function Footer() {
  const Navigate = useNavigate();
  function divert() {
    Navigate("www.texinity.com");
  }
  return (
    <p style={style.footer}>
      All Rights Reserved @2022
      <a style={style.logo} href={"www.texinity.com"}>

        Texinity Technologies
      </a>
    </p>
  );
}
export default Footer;
