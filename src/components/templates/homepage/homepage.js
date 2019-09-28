import React, { Component, Fragment } from "react";
import { MainContainer, MainContent, ServicesSection, Footer } from "./styles";
import Header from "../../organisms/header/Header";
import Hero from "../../molecules/hero/hero";
import { menuItems } from "../../organisms/header/menuItems";

export default class Homepage extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <Fragment>
        <MainContainer>
          <Header menuItems={menuItems}>
          </Header>
          <Hero
            imageUrl="http://demo.patternlab.io/images/fpo_hero.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas ex hendrerit massa rhoncus, quis tempor velit fermentum."
          />        
          <MainContent>
              <ServicesSection />
          </MainContent>
        </MainContainer>
        <Footer />
      </Fragment>
    );
  }
}
