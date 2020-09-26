import styled, { css } from "styled-components";

const Button = styled.button`
  /* This renders a button with these styles: */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* This overrides that^ background & color(font-color), if primary = true.*/
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;

export default Button;
