import React, { Component, Fragment } from "react";
import Homepage from "../../templates/homepage/homepage";
import { MainContainer, MainContent, Footer, ServicesSection } from "../../templates/homepage/styles";
import Hero from "../../molecules/hero/hero";
import Header from "../../organisms/header/Header";
import defaultCardImage from "../../../res/img/placeholders/400x100.png";
import { Icon } from "react-icons-kit";
import {
  basic_smartphone,
  basic_lightbulb,
  basic_webpage_img_txt
} from "react-icons-kit/linea/";
import { menuItems } from "../../organisms/header/menuItems";

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

  getServices = () => {
    const services = [
      {
        icon: basic_smartphone,
        title: "Mobile App Development",
        description: "We design & develop beautiful iOS & Android mobile apps."
      },
      {
        icon: basic_lightbulb,
        title: "Startups",
        description: `We build beautiful platform customised to your needs. Tell us your idea now!`
      },
      {
        icon: basic_webpage_img_txt,
        title: "Web Development",
        description: `We build beautiful responsive sites that will not remain unnoticed.`
      }
    ];

    return services;
  };

  render() {
    return (
      <Fragment>
        <MainContainer>
          <Header menuItems={menuItems} />
          <Hero
            imageUrl={this.getRandomImage().url}
            text="Born in Sydney, we develop beautiful websites and mobile apps. "
          ></Hero>
          <MainContent>
            <ServicesSection>
            <ul>
              {this.getServices().map(service => {
                //TODO: componentizar CARD
                return (
                  <li>
                    {/* <img
                      src={defaultCardImage}
                      alt={service.title}
                      className="card-image"
                    /> */}
                    <div className="card-icon">
                      <Icon icon={service.icon} size={52} />
                    </div>
                    <div>
                      <a href="#" className="card-link">
                        <h3 className="card-title">{service.title}</h3>
                      </a>
                      <p className="description">{service.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            </ServicesSection>
          </MainContent>
        </MainContainer>
        <Footer />
      </Fragment>
    );
  }
}
