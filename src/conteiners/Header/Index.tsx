import React from "react";
import { HeaderContainer, HeaderSubtitle, HeaderAspiration, HeaderTitle, HeaderMenu, HeaderIntrodution, HeaderMenuItem } from "./styledComponents";
//import './style.css';

export default class Header extends React.Component {
    render(){
        return(
            <HeaderContainer>
                <HeaderIntrodution>
                    <HeaderTitle>Jesus Abrahão</HeaderTitle>
                    <HeaderSubtitle>Game developer</HeaderSubtitle>
                    <HeaderAspiration>Passionate about games and in the process of becoming a formidable developer.</HeaderAspiration>
                </HeaderIntrodution>
            </HeaderContainer>
        );
    }
}