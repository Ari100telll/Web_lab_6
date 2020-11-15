import styled from 'styled-components';
import {Card} from "antd";

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height:800px;
    /* justify-content: space-around; */
    align-items: center;

    /* border:1px solid black; */
`;

export const InfoTitle = styled.div`
margin-top: 50px;
    display: flex;
    justify-content: space-around;

    width:80%;
    
    /* border: 2px solid lightblue; */
    
    >img {
        border-radius: 10px; 
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        width: 40%;
    }

    > div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: 50%;
        /* border: 2px solid black; */
        
    }
`;

export const StyledEvents = styled.div`
    display: flex;
    justify-content: space-around;

    margin-top: 60px;

    width: 90%;
    height: 350px;
    /* border: 1px solid #000000; */

`;

export const StyledCardComponents = styled.div`
    /* width:; */
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    /* border: 1px solid black; */
`;

export const StyledCard = styled(Card)`
width: 240px;
height: 300px;
`;