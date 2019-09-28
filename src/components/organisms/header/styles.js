import styled from "styled-components";

const StyledHeader = styled.header`
  box-sizing: border-box;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  z-index: 3;
  transition: padding 0.2s linear, background-color 0.2s linear;
  ${"" /* box-shadow: 2px 2px 5px rgba(204, 204, 204, 0.349); */}
  height: 80px;
  position: fixed;
  top: 0;
  ${"" /* background: #182258; */}
  color: white;
  column-count: 3;
`;

const HeaderLogo = styled.div`
  padding: 15px 10px;
  position: fixed;
  left: 25px;
`;

export { StyledHeader, HeaderLogo };
