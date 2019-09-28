import styled from "styled-components";

const CardContainer = styled.div`
    display: block;
    background: #f4f4f4;
    margin: 50px;
    padding: 35px 16px 27px 16px;
    max-width: 400px;
    border-radius: 4px;    
    color: #673ab7;
    text-align: center;
 
  .card-icon {
    text-align: center;
  }

  img.card-image {
    min-height: 100px;
    width: 100%;
    display: inline-block;
  }

  > div {
    padding: 15px;
  }

   a.card-link {
    text-decoration: none;
    font-size: 26px;
    padding: 2px 0;
    color: #673ab7; 
  }

  .description {
    margin-top: 20px;
    font-size: 15px;
    color: #777;
  }
`;



export { CardContainer };
