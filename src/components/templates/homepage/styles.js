import styled from "styled-components";
import "../../../res/styles/global.css";
import "../../../res/styles/reset.css";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  ul {
    display: flex;
    justify-content: space-evenly;
  }

  li {
    background: #f4f4f4;
    margin: 50px;
    padding: 35px 16px 27px 16px;
    max-width: 400px;
    border-radius: 4px;    
    color: #673ab7;
    text-align: center;
  }

  li .card-icon {
    text-align: center;
  }

  img.card-image {
    min-height: 100px;
    width: 100%;
    display: inline-block;
  }

  li > div {
    padding: 15px;
  }

  li a.card-link {
    text-decoration: none;
    font-size: 26px;
    padding: 2px 0;
    color: #673ab7; 
  }

  li .description {
    margin-top: 20px;
    font-size: 15px;
    color: #777;
  }


`;

const Footer = styled.footer`
  background: #333;
  height: 8em;
`;

const ServicesSection = styled.div`
  background: #fff;
  padding: 40px 0;

`

export { MainContainer, MainContent, Footer, ServicesSection };
