import React from "react";
import {
  Logo,
  LogoWrapper,
  NavbarContainer,
  NavbarWrapper,
  NavItem,
  NavMenu,
  SearchBar,
  SearchWrapper,
} from "./NavbarElements";
import { ImHome3, ImHeart } from "react-icons/im";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <LogoWrapper>
          <Logo to="/" exact>
            cou<span style={{ color: "#eebece" }}>leur</span>
          </Logo>
        </LogoWrapper>
        <SearchWrapper>
          <SearchBar placeholder="Can't find what you're looking for ?" />
        </SearchWrapper>
        <NavMenu>
          <NavItem>
            <ImHome3 />
          </NavItem>
        </NavMenu>
        <NavMenu>
          <NavItem>
            <ImHeart />
          </NavItem>
        </NavMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
