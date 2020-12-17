import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InputNumber, DatePicker } from "antd";
import { NavLink } from "react-router-dom";
import { Spin } from "antd";
import { SpinBlock } from "../App/App.styles";
import Event_0 from "../../Icons/Event_0.jpg";
import { addToCart } from "../../Redux/reducers";
import { useDispatch } from "react-redux";

import {
  StyledItem,
  StyledMainInfo,
  StyledBuyInfo,
  EventImg,
  InfoContainer,
  InfoText,
  StyledButton,
} from "./item.style";
import API from "../../APImanager/apimanager";

const Item = () => {
  const { id } = useParams();
  const [datta, setDatta] = useState(undefined);
  const dispatch = useDispatch();
  const load = () => {
    async function getData() {
      let userData = await API.get("/children-event/" + id);
      setDatta(userData.data);
      return userData.data;
    }
    setTimeout(() => {
      getData();
    }, 0);
  };

  useEffect(load, []);

  const spiner = () => {
    return (
      <SpinBlock>
        <Spin size="large" />
      </SpinBlock>
    );
  };

  const cartCklickAdd = () => {
    dispatch(addToCart({element: datta, quantity: 1}));
  }

  return (
    <StyledItem>
      {datta === undefined ? (
        spiner()
      ) : (
        <React.Fragment>
          <StyledMainInfo>
            <EventImg src={Event_0} />
            <InfoContainer>
              <h1>{datta.name}</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              nesciunt vel dicta? Itaque temporibus quasi repellendus ducimus
              illum porro architecto rem cupiditate quibusdam tempora inventore,
              ratione optio quas numquam minus?
              <InfoText>
                <div>Contact: {datta.contact_number}</div>
                <div>Duration: {datta.duration_in_minutes}</div>
              </InfoText>
              <div>
                Count of people:{" "}
                <InputNumber
                  max={datta.max_quantity_of_children}
                  min={1}
                  defaultValue={1}
                ></InputNumber>
                Date: <DatePicker showTime />
              </div>
            </InfoContainer>
          </StyledMainInfo>
          <StyledBuyInfo>
            <div>Price: {datta.price_in_uah}$</div>
            <div>
              <NavLink exact to="/Catalog">
                <StyledButton>Back to catalog</StyledButton>
              </NavLink>
              <StyledButton type="primary" onClick={cartCklickAdd}>Add to cart</StyledButton>
            </div>
          </StyledBuyInfo>
        </React.Fragment>
      )}
    </StyledItem>
  );
};

export default Item;
