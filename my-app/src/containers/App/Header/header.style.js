import styled from "styled-components";
import { Button } from "antd";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  height: 70px;
  background-color: #dbdbdb;
  /* border: 1px solid black; */

  > div:nth-child(1) {
    font-size: 24px;
    flex: 1;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div:nth-child(2) {
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
  }
  > div > img {
    height: 60px;
    width: 60px;
  }
  > div > ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;

    width: 80%;
    height: 100%;

    list-style-type: none;
    /* border: 1px solid blue; */
  }
  > div > ul > li {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80%;
    width: 20%;

    /* border: 5px solid lightblue; */
  }
  > div > ul > li > a {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 100%;
    width: 100%;

    font-size: 20px;
    text-decoration: none;
    color: black;

    /* border: 1px solid black; */
  }
`;

export const StyledLogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;

  /* border: 1px solid black; */
`;

export const StyledLogOutButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dbdbdb;
  color: red;
  font-size: 18px;
  height: 100%;
  width: 100%;
  border: none;

`;
