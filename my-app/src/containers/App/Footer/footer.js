import React from "react";
import { StyledFooter, StyledFooterText, StyleShares, StyledLogo, IconBase } from "./footer.styled";
import logo from "../../../Icons/logo_icon.png";
import Icon, { TwitterOutlined, FacebookOutlined, LinkedinOutlined, GoogleOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <StyledFooterText>
                    <h3>Branding Stuff</h3>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </StyledFooterText>
                <StyledLogo>
                    <img src={logo} />
                </StyledLogo>
                <StyleShares>
                    <IconBase component={TwitterOutlined} color='#008cff' />
                    <IconBase component={FacebookOutlined} color='#0026ff' />
                    <IconBase component={LinkedinOutlined} color='#00a2ff' />
                    <IconBase component={GoogleOutlined} color='#ff0000' />
                </StyleShares>
            </div>
            <div>2020 IoT @ Made by John Snow</div>
        </StyledFooter>
    );
}
export default Footer;