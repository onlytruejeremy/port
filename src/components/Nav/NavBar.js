import React from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Menu,
  MenuIcon,
  MenuItem,
  MenuLink
} from "./NavComps";
const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              UCode
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={handleClick} to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={handleClick} to="/about">
                  About
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={handleClick} to="/projects">
                  Projects
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={handleClick} to="/contact">
                  Contact
                </MenuLink>
              </MenuItem>
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
