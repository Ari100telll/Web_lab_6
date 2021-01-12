import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { StyledApp } from "./App.styles";
import MyContext from "../../Context/context";
import Home from "../Home/home";
import Cart from "../Cart/cart";
import CartForm from "../CartForm/cartform";
import Catalog from "../Catalog/catalog";
import Success from "../Success/success";
import Login from "../Login/login";
import SignUp from "../Signup/signup";
import Item from "../Item/item";
import ProtectedRoute from "../ProtectedRoute/protectedrout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalContextProvider } from "../../Redux/provider";

const logLink = "Login";

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
      updataArr: this.updataArr,
    };
  }
  
  render() {
    return (
      <Router>
        <GlobalContextProvider>
          <MyContext.Provider value={this.state}>
            <StyledApp>
              <Header />
              <Switch>
                <ProtectedRoute
                  component={Catalog}
                  isProtectedPage
                  redirect={logLink}
                  path="/Catalog"
                />
                <ProtectedRoute
                  component={Cart}
                  isProtectedPage
                  redirect={logLink}
                  path="/Cart"
                />
                <ProtectedRoute
                  component={CartForm}
                  isProtectedPage
                  redirect={logLink}
                  path="/CartForm"
                />
                <ProtectedRoute
                  component={Success}
                  isProtectedPage
                  redirect={logLink}
                  path="/Success"
                />
                <ProtectedRoute
                  component={Item}
                  isProtectedPage
                  redirect={logLink}
                  path="/item/:id"
                />
                <ProtectedRoute
                  component={Login}
                  isProtectedPage={false}
                  redirect={""}
                  path="/Login"
                />
                <ProtectedRoute
                  component={SignUp}
                  isProtectedPage={false}
                  redirect={""}
                  path="/SignUp"
                />
                <ProtectedRoute
                  component={Home}
                  isProtectedPage
                  redirect={logLink}
                  path="/"
                />
              </Switch>
              <Footer />
            </StyledApp>
          </MyContext.Provider>
        </GlobalContextProvider>
      </Router>
    );
  }
}
export default App;
