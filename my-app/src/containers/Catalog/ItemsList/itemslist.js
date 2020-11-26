import React from "react";
import {StyledList} from "./itemslist.styled";
import {Item} from "./Item/item";
import Event_1 from "../../../Icons/Event_2.jpg";


const data = [
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:1
    },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:2
  },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:3
    },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:4
    },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:5
    },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:6
    },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:7
    },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:8
    },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:9
    },
    {title: "Birthday Party",
    imgSrc: Event_1,
    price: 200,
    duration: 120,
    contact: "+380967872639",
    countOfPeople: 10,
    id:10
    }
]

export const ItemsList = () => {
    return (
      <StyledList>
        {data.map(({title, imgSrc, price, duration, contact, countOfPeople, id}) => (
          <Item title={title} imgSrc={imgSrc} price={price} duration={duration} contact={contact}countOfPeople={countOfPeople} id={id}width="290"/>
          ))}
        </StyledList>
    );
}

export default ItemsList;