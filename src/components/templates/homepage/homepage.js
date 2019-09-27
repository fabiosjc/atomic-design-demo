import React, { Component } from "react";
import { MainContainer, MainContent } from "./styles";
import Header from "../../organisms/header/Header";
import Hero from "../../molecules/hero/hero";

export default class Homepage extends Component {
  render() {
    return (
      <MainContainer>
        <Header />
        {/* <Hero
          imageUrl="http://demo.patternlab.io/images/fpo_hero.png"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas ex hendrerit massa rhoncus, quis tempor velit fermentum."
        ></Hero> */}
        <MainContent>{this.props.children}</MainContent>
      </MainContainer>
    );
  }
}
