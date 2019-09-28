import styled from "styled-components";

const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 25%;
  right: 100px;
  position: absolute;
  padding: 15px 0;
`;

const MenuItem = styled.li`
  font-size: 1.5rem;
  position: relative;
`;

export { StyledMenu, MenuItem };
