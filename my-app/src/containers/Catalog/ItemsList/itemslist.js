import React, { useContext } from "react";
import { StyledList } from "./itemslist.styled";
import { Item } from "./Item/item";
import MyContext from "../../../Context/context";

export const ItemsList = () => {
  // const { dataArr } = useContext(MyContext);

  return (
    <MyContext.Consumer>
      {({ dataArr }) => (
        <StyledList>
          {dataArr.map(
            ({
              title,
              imgSrc,
              price,
              duration,
              contact,
              countOfPeople,
              id,
            }) => (
              <Item
                title={title}
                imgSrc={imgSrc}
                price={price}
                duration={duration}
                contact={contact}
                countOfPeople={countOfPeople}
                id={id}
                key={id}
                width="290"
              />
            )
          )}
        </StyledList>
      )}
    </MyContext.Consumer>
  );
};

export default ItemsList;
