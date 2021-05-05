import styled from "styled-components";
import {Link} from 'react-router-dom';

export const AllSetH2 = styled.h2`
  font-size: 34px;
  font-weight: 900;
  color: #fff;
  background: none;
  margin-top: 0;
`;

export const AllSetP = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 67px;
  color: #fff;
  background: none;
`;

export const AllSetFooter = styled.footer`
  height: 100px;
  display: flex;
  background: #222;
  margin-bottom: 0;
`;

export const FooterColA = styled.div`
  height: 50px;
  width: 470px;
  margin-left: 213px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  text-align: left;
  text-decoration: none;
`;

export const FooterColB = styled.div`
  height: 67px;
  width: 470px;
  margin-right: 213px;
  text-align: right;
`;

export const AllFooterP = styled(Link)`
  font-size: 18px;
  font-weigth: 700;
  color: #fff;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

export const AllFooterBtn = styled.button`
  height: 24px;
  width: 126px;
  border-radius: 50px;
  padding: 2px;
  font-size: 14px;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #fff;
  color: #fff;
`;
