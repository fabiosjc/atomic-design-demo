import React, { Component } from "react";
import Homepage from "../../templates/homepage/homepage";
import { MainContainer } from "../../templates/homepage/styles";
import Hero from "../../molecules/hero/hero";
import Header from "../../organisms/header/Header";
import { MainContent } from "../../molecules/hero/styles";
import { heroImg } from "../../../res/img/stars.jpg";

export default class Home extends Component {
  getRandomImage() {
    const randomImg = [
      {
        url:
          "https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=80"
      },
      {
        url:
          "https://images.unsplash.com/photo-1531707566548-6577aab321d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      }
    ];

    return randomImg[Math.floor(Math.random() * randomImg.length)];
  }

  render() {
    return (
      <MainContainer>
        <Header />
        <Hero
          imageUrl={this.getRandomImage().url}
          text="Born in Sydney, we develop beautiful websites and mobile apps. "
        ></Hero>
        <MainContent></MainContent>
      </MainContainer>
    );
  }
}
