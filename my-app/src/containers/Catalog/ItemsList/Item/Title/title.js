import React from "react";
import {StyledItem, ItemImg} from "./item.styled.js";
import Event_1 from "../../../../Icons/Event_1.jpg";

export const Item = (props) => {
    return (
        <StyledItem width={props.width} height={props.height}>
            <ItemImg src={Event_1}/>
            {props.title}
        </StyledItem>
    );
}

export default Item;