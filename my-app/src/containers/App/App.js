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

const data = {
  1: {
    title: "Birthday Party",
    imgSrc: Event_1,
    price: 700,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 8,
    id: 1,
  },
  2: {
    title: "LuftBalonnen",
    imgSrc: Event_2,
    price: 100,
    duration: 100,
    contact: "+380967872639",
    countOfPeople: 12,
    id: 2,
  },
  3: {
    title: "Animators",
    imgSrc: Event_3,
    price: 400,
    duration: 200,
    contact: "+380758495647",
    countOfPeople: 10,
    id: 3,
  },
  4: {
    title: "Batoot",
    imgSrc: Event_4,
    price: 220,
    duration: 220,
    contact: "+380967872639",
    countOfPeople: 5,
    id: 4,
  },
  5: {
    title: "Concert",
    imgSrc: Event_5,
    price: 600,
    duration: 300,
    contact: "+380967872639",
    countOfPeople: 30,
    id: 5,
  },
  6: {
    title: "lorem",
    imgSrc: Event_6,
    price: 180,
    duration: 45,
    contact: "+380967872639",
    countOfPeople: 13,
    id: 6,
  },
  7: {
    title: "ipsum",
    imgSrc: Event_7,
    price: 180,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 15,
    id: 7,
  },
  8: {
    title: "dolor",
    imgSrc: Event_8,
    price: 500,
    duration: 190,
    contact: "+380967872639",
    countOfPeople: 20,
    id: 8,
  },
  9: {
    title: "sit",
    imgSrc: Event_9,
    price: 300,
    duration: 190,
    contact: "+380967872639",
    countOfPeople: 12,
    id: 9,
  },
  10: {
    title: "amet",
    imgSrc: Event_10,
    price: 450,
    duration: 110,
    contact: "+380967872639",
    countOfPeople: 10,
    id: 10,
  },
};

let dataArr = Object.values(data);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updataArr = (arr) => {
      this.setState(() => ({
        dataArr: arr,
      }));
    };

    this.sortArr = (arr, compareFunc) => {
      this.setState(() => ({
        dataArr: arr.sort(compareFunc),
      }));
    };
    // Состояние хранит функцию для обновления контекста,
    // которая будет также передана в Provider-компонент.
    this.state = {
      data: data,
      dataArr: dataArr,
      updataArr: this.updataArr,
      sortArr: this.sortArr,
    };
  }

  render() {
    return (
      <Router>
        <MyContext.Provider value={this.state}>
          {" "}
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
