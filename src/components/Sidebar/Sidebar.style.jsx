import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Block = styled.div`
  position: fixed;
  top: 30px;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  margin-bottom: 30px;
`;

export const LogoLink = styled(Link)`
  display: block;
  margin-bottom: 50px;
  text-decoration: none;
`;

export const LinkItem = styled(NavLink)`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;

  &.${(props) => props.active} {
    font-weight: 700;
  }
`;

export const Img = styled.img``;

export const Span = styled.span`
  margin-left: 20px;
`;

export const Button = styled.button`
  padding: 15px 90px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  background-color: #1d9bf0;
  border-radius: 27.5px;
  border: none;
`;
