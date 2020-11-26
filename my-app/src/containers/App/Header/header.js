import React from "react";
import { StyledHeader } from "./header.style";
import { NavLink } from "react-router-dom";
import logo from "../../../Icons/logo_icon.png";

const Header = () => {
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
            </StyledHeader>
    );
}

export default Header;