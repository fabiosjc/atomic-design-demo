import React, { Component } from "react";
import PropTypes from "prop-types";
import { HeroContainer } from "./styles";
import imagePlaceholder from "../../../res/img/placeholders/1280x720.png";

export default class Hero extends Component {
  static propTypes = {
    imageUrl: PropTypes.string,
    text: PropTypes.string
  };

  constructor(props) {
    super(props);
    const {
      imageUrl = imagePlaceholder,
      text = "Hello World"
    } = this.props;

    this.state = {
      imageUrl: imageUrl,
      text: text
    };
  }

  render() {
    return (
      <HeroContainer imageUrl={this.state.imageUrl}>
        <img
          className="hero-image"
          src={this.state.imageUrl}
          alt="Hero"
          width="100%"
          height="100%"
        />
        <h2 className="hero-text">{this.state.text}</h2>
      </HeroContainer>
    );
  }
}
