import React from "react";
import {
  AllFooterBtn,
  AllFooterP,
  AllSetFooter,
  FooterColA,
  FooterColB,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <AllSetFooter>
        <FooterColA>
          <AllFooterP to="/">
            <strong>couleur@</strong>2021
          </AllFooterP>
        </FooterColA>
        <FooterColB>
          <AllFooterP>
          </AllFooterP>
        </FooterColB>
      </AllSetFooter>
    </>
  );
};

export default Footer;