import styled from "styled-components";

export const StyledItem = styled.div`
  background-color: #c7c7c7;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: ${(props) => (props.width ? props.width + "px" : "300px")};
  height: ${(props) => (props.height ? props.height + "px" : "350px")};
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 10px;

  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  /* border: 1px solid black; */
`;
export const ItemImg = styled.img`
  display: flex;
  /* width: ${(props) => (props.width ? props.width + "px" : "100%")}; */
  width: 100%;
  border-radius: 10px;
  /* height: a */
  /* border: 1px solid black; */
`;
export const ItemTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  /* border: 1px solid black; */
`;

export const ItemContent = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #e2e2e2;
  /* border: 1px solid gray; */
`;

export const ItemCartButton = styled.button`
  font-size: 18px;
  font-weight: 600;
  padding: 0;
  margin: 0;
  background-color: #5bd5fd;
  width: 100%;
  border-radius: 0 0 10px 10px;
  border: 0px solid #5bd5fd; 
  outline: none;

  &:hover {
    background-color: #00c2fd;  

    transition-duration: 0.5s;

  }
  &:focus {
    border-radius: 0 0 10px 10px; 
    background-color: #00c2fd;
  }
`;
