import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  display: flex;
  background: #222;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  height: 70px;
  background: #222;
`;

export const LogoWrapper = styled.div`
  height: 30px;
  place-items: center;
  margin: 0px 25px;
  padding-top: 15px;
`;

export const Logo = styled(Link)`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  color: #fff;
`;

export const SearchWrapper = styled.div`
  height: 40px;
  width: 1000px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const SearchBar = styled.input`
  height: 50px;
  width: 1000px;
  font-size: 16px;
  margin-right: 30px;
  padding: 0px 20px;
  text-align: left;
  border-radius: 25px;
  border: none;
  background-color: #EFEFEF;
`;

export const NavMenu = styled.div`
  height: 70px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 30px;
  
`;

export const NavItem = styled(Link)`
  font-weight: 600;
  font-style: bold;
  text-decoration: none;
  font-size: 20px;
  color: #eebece;
`;
