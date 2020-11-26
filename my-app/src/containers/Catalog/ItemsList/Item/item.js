import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledItem,
  ItemImg,
  ItemTitle,
  ItemContent,
  ItemCartButton,
} from "./item.styled.js";

export const Item = (props) => {
  return (
    <StyledItem width={props.width} height={props.height}>
      <ItemImg src={props.imgSrc} />
      <ItemTitle>{props.title}</ItemTitle>
      <ItemContent>
        Prise: {props.price}$<br />
        Duration: {props.duration}m<br />
        Contact: {props.contact}
        <br />
        Max count of people: {props.countOfPeople}
        <br />
      </ItemContent>

      <NavLink
        exact
        to={"/item?id=" + props.id}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <ItemCartButton> Home</ItemCartButton>
      </NavLink>
    </StyledItem>
  );
};

export default Item;
