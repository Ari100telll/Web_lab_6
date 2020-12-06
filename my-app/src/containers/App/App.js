import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { StyledApp } from "./App.styles";
import MyContext from "../../Context/context";
import Home from "../Home/home";
import Catalog from "../Catalog/catalog";
import Item from "../Item/item";
import Event_1 from "../../Icons/Event_1.jpg";
import Event_2 from "../../Icons/Event_2.jpg";
import Event_3 from "../../Icons/Event_3.jpg";
import Event_4 from "../../Icons/Event_4.jpg";
import Event_5 from "../../Icons/Event_0.jpg";
import Event_6 from "../../Icons/Event_1.jpg";
import Event_7 from "../../Icons/Event_2.jpg";
import Event_8 from "../../Icons/Event_3.jpg";
import Event_9 from "../../Icons/Event_4.jpg";
import Event_10 from "../../Icons/Event_0.jpg";
import Event_11 from "../../Icons/Event_1.jpg";
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
