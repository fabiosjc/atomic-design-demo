import styled, { css } from "styled-components";

const StyledButton = styled.button`
  font-family: "Roboto", "Arial";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  padding: 10px 18px;
  height: 35px;
  cursor: pointer;
  
${props =>
  props.disabled &&
  css`
    background: #eeeeee9c;
    border-radius: 4px;
    color: #999;
    border: none;
  `}

${props =>
  props.raised &&
  !props.disabled &&
  css`
    background: #009898;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.19), 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    color: #ffffff;
    border: none;
  `}

${props =>
  props.unelevated &&
  !props.disabled &&
  css`
    background: #009898;
    border-radius: 4px;
    color: #ffffff;
    border: none;
  `}

${props =>
  props.outlined &&
  !props.disabled &&
  css`
    background: #ffffff;
    border: 2px solid #009898;
    border-radius: 4px;
    color: #009898;
  `}

${props =>
  props.outlined &&
  props.disabled &&
  css`
    background: #ffffff;
    border: 2px solid #cccccc !important;
    border-radius: 4px;
    color: #cccccc;
  `}

${props =>
  props.rounded &&
  !props.disabled &&
  css`
    background: #009898;
    border-radius: 18px;
    color: #ffffff;
    border: none;
  `}

  ${props =>
    props.icon &&
    css`
      span {
        margin-left: 1em;
      }
    `}
        
`;

export { StyledButton };
