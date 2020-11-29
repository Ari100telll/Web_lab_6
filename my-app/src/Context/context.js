import React from "react";

const MyContext = React.createContext({
  data: {},
  dataArr: [],
  updataArr: (arr) => {},
  sortArr: (arr, compareFunc) => {},
});

export default MyContext;
