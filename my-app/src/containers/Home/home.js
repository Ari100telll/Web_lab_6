import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import title_img from "../../Icons/Home_title_img.jpg";
import MyContext from "../../Context/context";
import Event_0 from "../../Icons/Event_0.jpg";
import Event_1 from "../../Icons/Event_1.jpg";
import Event_2 from "../../Icons/Event_2.jpg";
import Event_3 from "../../Icons/Event_3.jpg";
import {
  StyledHome,
  InfoTitle,
  StyledEvents,
  StyledCardComponents,
  StyledCard,
} from "./home.style";
import { Card, Button } from "antd";
import "antd/dist/antd.css";

const Home = () => {
  const { data } = useContext(MyContext);
  const { Meta } = Card;

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
        {Object.values(data).slice(0, countOfElements).map(({ imgSrc, title, duration, price, id }) => (
          <StyledCard
            hoverable
            cover={<img alt="example" src={imgSrc} />}
            key={id}
          >
            <StyledCardComponents>
              <Meta title={title} />
              Duration: {duration}m<br />
              Price: ${price}
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
      <Button size="large" style={{ borderRadius: 5 , margin:20 }} onClick={() => setcountOfElements(countOfElements + 20)}>
        Veiw more
      </Button>
    </StyledHome>
  );
};

export default Home;
