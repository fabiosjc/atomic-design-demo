import styled from "styled-components";
import imagePlaceholder from "../../../res/img/placeholders/1280x720.png";

const DEFAULT_HEIGHT = "40em";

const HeroContainer = styled.div`
  display: block;
  min-height: ${props => (props.height ? props.height : DEFAULT_HEIGHT)};
  background: ${props =>
      props.backgroundUrl
        ? `url(${props.imageUrl})`
        : `url('${imagePlaceholder}')`}
    center;

  img.hero-image {
    display: block;
    width: 100%;
    max-height: ${props => (props.height ? props.height : DEFAULT_HEIGHT)};
    object-fit: cover;
  }

  .hero-text {
    position: absolute;
    top: 20%;
    left: 5%;
    max-width: 70%;
    border-radius: 6px;
    background: #444444ab;
    text-align: justify;

    color: #fff;
    padding: 1rem;
    font-size: 2.6rem;
    transition: all 0.2s ease;
  }
`;

const MainContent = styled.main``;

export { HeroContainer, MainContent };
