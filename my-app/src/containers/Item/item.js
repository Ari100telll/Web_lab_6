import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import { Button } from "semantic-ui-react";
import { InputNumber, DatePicker, Button } from "antd";
import { NavLink } from "react-router-dom";

import MyContext from "../../Context/context";
import {
  StyledItem,
  StyledMainInfo,
  StyledBuyInfo,
  EventImg,
  InfoContainer,
  InfoText,
  StyledButton
} from "./item.style";

export const Item = (props) => {
  const { id } = useParams();
  const { data } = useContext(MyContext);
  const item_element = data[id];
  return (
    <StyledItem>
      <StyledMainInfo>
        <EventImg src={item_element.imgSrc} />
        <InfoContainer>
          <h1>{item_element.title}</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt
          vel dicta? Itaque temporibus quasi repellendus ducimus illum porro
          architecto rem cupiditate quibusdam tempora inventore, ratione optio
          quas numquam minus?
          <InfoText>
            <div>Contact: {item_element.contact}</div>
            <div>Duration: {item_element.duration}</div>
          </InfoText>
          <div>
            Count of people:{" "}
            <InputNumber
              max={item_element.countOfPeople}
              min={1}
              defaultValue={1}
            ></InputNumber>
            Date: <DatePicker showTime />
          </div>
        </InfoContainer>
      </StyledMainInfo>
      <StyledBuyInfo>
        <div>Price: {item_element.price}$</div>
        <div>
        <NavLink exact to="/Catalog">
          <StyledButton>Back to catalog</StyledButton>
          </NavLink>
          <StyledButton type="primary">Add to cart</StyledButton>
        </div>
      </StyledBuyInfo>
    </StyledItem>
  );
};

export default Item;
