import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../../../../Context/context";
import {
  StyledItem,
  ItemImg,
  ItemTitle,
  ItemContent,
  ItemCartButton,
} from "./item.styled.js";

export const Item = (props) => {
  const { dataArr } = useContext(MyContext);

  return (
    <StyledItem width={props.width} height={props.height}>
      <ItemImg src={props.imgSrc} />
      <ItemTitle>{props.title.toUpperCase()}</ItemTitle>
      <ItemContent>
        Prise: {props.price}$<br />
        Duration: {props.duration}m<br />
        Contact: {props.contact}
        <br />
        Max count of people: {props.countOfPeople}
        <br />
      </ItemContent>

      <NavLink
        to={"/item/" + props.id}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <ItemCartButton>More</ItemCartButton>
      </NavLink>
    </StyledItem>
  );
};

export default Item;
