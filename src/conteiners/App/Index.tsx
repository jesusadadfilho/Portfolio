import { render } from "@testing-library/react";
import React from "react";
import { Container } from "./styledComponents";
import Header from "../Header/Index";
import Body from "../Body/Index";

export default class App extends React.Component {
    
    render(){
        return(
            <Container>
                <Header />
                <Body/>
            </Container>
        );
    }

}