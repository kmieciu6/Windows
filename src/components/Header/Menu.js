import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) {
    display: flex;

    a {
      font-family: "Open Sans", sans-serif;
      font-size: 0.6875rem;
      font-weight: 700;
      letter-spacing: 0.1875rem;
      color: #A5A5A5;
      text-decoration: none;
      text-transform: uppercase;
      padding: 28px 10px;
      margin: 0 40px;
      border-bottom: 4px solid transparent;

      &:hover {
        color: black;
        border-color: #08A6E4;
      }
    }
  }
`

const Menu = () => (
    <StyledMenu>
        <a href="#statistics">Why Us</a>
        <a href="#benefits">Benefits</a>
        <a href="#pricing">Prices</a>
        <a href="#contact">Contact</a>
    </StyledMenu>
)

export default Menu;
