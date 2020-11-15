import React from "react";
import { StyledHeader } from "./header.style";
import Home from "../../Home/home";
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import logo from "../../../Icons/logo_icon.png";

const Header = () => {
    return (
        <Router>
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
                            <NavLink exact to="/Items">
                                Items
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </StyledHeader>
            <Switch>
                <Route path="/Catalog">
                    <h3>Cataloge</h3>
                </Route>
                <Route path="/Items">
                    <h3>Items</h3>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default Header;