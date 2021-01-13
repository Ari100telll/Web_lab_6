import styled from "styled-components";

import { Form, Field } from "formik";
import { Button } from "antd";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  height: 600px;

  /* border: 1px solid black; */
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: white;
  align-items: center;
  height: 550px;
  font-size: 16px;

  box-shadow: 7px 7px 3px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  > button {
    width: 50%;
    background-color: #fff;
    height: 35px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid black;
  }

  /* border: 1px solid black; */
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 20px;

  height: 60px;
  /* border: 1px solid black; */
`;

export const StyledFildPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: ${(props) => (props.width ? props.width + "%" : "40%")};
  height: 70px;

  /* border: 1px solid blue; */
`;

export const StyledField = styled(Field)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  /* border: 2px solid black; */
`;

export const StyledButtonSubmit = styled(Button)`
  width: 50%;
  margin-bottom: 20px;
`;

export const StyledSignButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0084ff;
  font-size: 18px;
  margin-top: 10px;
  height: 60px;
  border: none;
`;