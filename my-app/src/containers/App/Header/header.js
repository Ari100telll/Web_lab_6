import React from "react";
import { StyledHeader, StyledLogOut, StyledLogOutButton } from "./header.style";
import { NavLink } from "react-router-dom";
import logo from "../../../Icons/logo_icon.png";
import { useLocalStorage } from "@rehooks/local-storage";

const Header = () => {
  const [email, setEmail, deleteEmail] = useLocalStorage("Email");

  const butout = () => {
    if (!!email) {
      return (
        <StyledLogOut>
          <StyledLogOutButton onClick={()=>deleteEmail()}>Log Out</StyledLogOutButton>
        </StyledLogOut>
      );
    }
  };

  return (
    <StyledHeader>
      <div>
        <img src={logo} />
        AllEvents
      </div>
      <div>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
      {butout()}
    </StyledHeader>
  );
};

export default Header;
