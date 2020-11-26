import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;

  width: ${(props) => (props.width ? props.width + "px" : "300px")};
  height: ${(props) => (props.height ? props.height + "px" : "350px")};
  margin-top: 20px;

  border-radius: 10px;
  border: 1px solid black;
`;
export const ItemImg = styled.img`
  display: flex;
  /* width: ${(props) => (props.width ? props.width + "px" : "100%")}; */
  width: 100%;
  border-radius: 10px;
  /* height: a */
  /* border: 1px solid black; */
`;
