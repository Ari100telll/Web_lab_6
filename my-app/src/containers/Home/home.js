import React from "react";
import title_img from "../../Icons/Home_title_img.jpg";
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

const data = [
  {
    imgSrc: Event_0,
    title: "Night Party",
    duration: 120,
    price: 300,
    id: 0,
  },
  {
    imgSrc: Event_1,
    title: "Birthday Party",
    duration: 200,
    price: 600,
    id: 1,
  },
  {
    imgSrc: Event_2,
    title: "99 Luftballons",
    duration: 150,
    price: 200,
    id: 2,
  },
  {
    imgSrc: Event_3,
    title: "Animators",
    duration: 300,
    price: 1000,
    id: 3,
  },
];

const Home = () => {
  
  const { Meta } = Card;
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
        {data.map(({ imgSrc, title, duration, price, id }) => (
          <StyledCard
            hoverable
            cover={<img alt="example" src={imgSrc} />}
            key={id}
          >
            <StyledCardComponents>
              <Meta title={title} />
              Duration: {duration}m<br />
              Price: ${price}
              <Button type="primary">More</Button>
            </StyledCardComponents>
          </StyledCard>
        ))}
      </StyledEvents>
      <Button size="large" style={{ borderRadius: 5 }}>
        Veiw more
      </Button>
    </StyledHome>
  );
};

export default Home;
