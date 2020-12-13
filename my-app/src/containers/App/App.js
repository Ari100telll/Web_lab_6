import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { StyledApp } from "./App.styles";
import MyContext from "../../Context/context";
import Home from "../Home/home";
import Catalog from "../Catalog/catalog";
import Item from "../Item/item";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updataArr = (arr) => {
      this.setState(() => ({
        data: arr,
      }));
    };

    this.state = {
      data: [],
      updataArr: this.updataArr
    };
  }

  render() {
    return (
      <Router>
        <MyContext.Provider value={this.state}>
          <StyledApp>
            <Header />
            <Switch>
              <Route path="/Catalog">
                <Catalog />
              </Route>
              <Route path="/Cart">
                <h3>Items</h3>
              </Route>
              <Route path="/item/:id">
                <Item />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </StyledApp>
        </MyContext.Provider>
      </Router>
    );
  }
}
export default App;
