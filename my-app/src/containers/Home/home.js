import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import title_img from "../../Icons/Home_title_img.jpg";
import Event_0 from "../../Icons/Event_0.jpg";
import API from "../../APImanager/apimanager";
import {
  StyledHome,
  InfoTitle,
  StyledEvents,
  StyledCardComponents,
  StyledCard,
} from "./home.style";
import {SpinBlock} from "../App/App.styles";
import { Card, Button, Spin } from "antd";
import "antd/dist/antd.css";

const Home = () => {
  const { Meta } = Card;
  const [data, setData] = useState(undefined);
  const load = () => {
    async function getData() {
      let userData = await API.get("/children-event");
      setData(userData.data);
      console.log(data);
    }
    setTimeout(() => {
      getData();
    }, 3000);

    return (
      <SpinBlock>
        <Spin size="large" />
      </SpinBlock>
    );
  };

  const [countOfElements, setcountOfElements] = useState(4);

  return (
    <StyledHome>
      <InfoTitle>
        <img src={title_img} />
        <div>
          <h1>All Events</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </InfoTitle>
      <StyledEvents>
        {data == undefined
          ? load()
          : data
              .slice(0, countOfElements)
              .map(({ name, duration_in_minutes, price_in_uah, id }) => (
                <StyledCard
                  hoverable
                  cover={<img alt="example" src={Event_0} />}
                  key={id}
                >
                  <StyledCardComponents>
                    <Meta title={name} />
                    Duration: {duration_in_minutes}m<br />
                    Price: ${price_in_uah}
                    <NavLink
                      to={"/item/" + id}
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <Button type="primary">More</Button>
                    </NavLink>
                  </StyledCardComponents>
                </StyledCard>
              ))}
      </StyledEvents>
      <Button
        size="large"
        style={{ borderRadius: 5, margin: 20 }}
        onClick={() => {
          setcountOfElements(countOfElements + 4);
        }}
      >
        Veiw more
      </Button>
    </StyledHome>
  );
};

export default Home;
