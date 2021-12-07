import React from "react";
import "./Footer.scss";
import { BsHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer__desctiption">
        <p>Made with by </p>
        <BsHeartFill className="footer__description-icon" />
        <span className="footer__description-name">
          {" "}
          <a href="https://bio.link/jmongedev" target="_blank"  rel="noreferrer">
            JESUS MONGE
          </a>{" "}
        </span>
      </div>
    </footer>
  );
};

export { Footer };
