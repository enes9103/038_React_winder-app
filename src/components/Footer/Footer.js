import React from "react";
import styling from "./Footer.module.scss";
import design from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className={styling.foot}>
      <div>
        <p className={styling.before}>
          Developed by Enes ÜNLÜ <small>Copyright © 2022</small>
        </p>
        <img src={design} alt="design" className={styling.design} />
        <p className={styling.after}>fraternity</p>
      </div>
    </div>
  );
};

export default Footer;
