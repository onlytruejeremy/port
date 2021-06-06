import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { Container } from "../Layout";

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: ${({ theme }) => theme.dBlue};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.light};
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

export const NavIcon = styled(FaCode)`
  margin-right: 0.8rem;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.08);
  }
`;

export const MenuIcon = styled.div`
  display: none;
  ${({ display }) =>
    display
      ? `display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 3rem;
    cursor: pointer;
    z-index: 1000000;
    color: firebrick;`
      : "none"};
  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    background-color: ${({ theme }) => theme.dBlue};
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.pHaze};
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;
