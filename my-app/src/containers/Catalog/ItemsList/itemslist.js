import React, { useContext } from "react";
import { StyledList } from "./itemslist.styled";
import { Item } from "./Item/item";
import MyContext from "../../../Context/context";
import Event_3 from "../../../Icons/Event_3.jpg";
import { Spin } from "antd";
import { SpinBlock } from "../../App/App.styles";

export const ItemsList = () => {
  const { data } = useContext(MyContext);

  const load = () => {
    return (
      <SpinBlock>
        <Spin size="large" />
      </SpinBlock>
    );
  };

  return (
    <StyledList>
      {data.length == 0
        ? load()
        : data.map(
            ({
              name,
              price_in_uah,
              duration_in_minutes,
              contact_number,
              max_quantity_of_children,
              id,
            }) => (
              <Item
                title={name}
                imgSrc={Event_3}
                price={price_in_uah}
                duration={duration_in_minutes}
                contact={contact_number}
                countOfPeople={max_quantity_of_children}
                id={id}
                key={id}
                width="290"
              />
            )
          )}
    </StyledList>
  );
};

export default ItemsList;
