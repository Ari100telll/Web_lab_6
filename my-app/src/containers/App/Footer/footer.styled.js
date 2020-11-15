import styled from 'styled-components';
import Icon from "@ant-design/icons";

export const StyledFooter = styled.div`
    display: flex;
    height: 150px;
    flex-direction: column;
    align-items: center;
    background-color: #dbdbdb;
    > div {
        display: flex;
        width: 90%;
        height:100%;
        align-items: center;
    }
    > div:nth-child(1){
        flex: 3;
        border-bottom: 1px solid #000000;
        justify-content: space-between;
    }
    > div:nth-child(2){
        flex: 1;
        justify-content: center;
    }
`;

export const StyledFooterText = styled.div`
    flex:4;
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 80%;


    font-size: 14px;
    color: gray;

    > h3 {
        margin: 0;
    }
`;

export const StyledLogo = styled.div`
    display: flex;
    flex:6;
    justify-content: center;
    align-items: center;

    > img {
        width: 70px;
        height: 70px;
    }
`;

export const StyleShares = styled.div`
display: flex;
flex:4;
height: 50%;

align-items: center;
justify-content: flex-end;
`;

export const IconBase = styled(Icon)`
    font-size: 30px;
    width: 40px;
    color: ${(color) => color};
`;
