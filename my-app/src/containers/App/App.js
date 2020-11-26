import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { StyledApp } from "./App.styles";
import Home from "../Home/home";
import Catalog from "../Catalog/catalog";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <StyledApp>
        <Header />
        <Switch>
          <Route path="/Catalog">
            <Catalog />
          </Route>
          <Route path="/Cart">
            <h3>Items</h3>
          </Route>
          <Route path="/item">
            <h3>asdadadsd</h3>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
  );
}

export default App;
