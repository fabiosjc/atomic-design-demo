import styled from "styled-components";

const DEFAULT_HEIGHT = "40em";

const HeroContainer = styled.div`
  display: block;
  min-height: ${props => (props.height ? props.height : DEFAULT_HEIGHT)};

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



export { HeroContainer };
