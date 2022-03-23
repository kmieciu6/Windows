import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  @media (max-width: 768px) {
    nav {
      display: flex;
      position: absolute;
      left: 0;
      top: 70px;
      flex-direction: column;
      box-shadow: 0 3px 6px #A5A5A5;
      width: 100%;
      z-index: 2;
      background: white;
      
      a {
        display: ${({open}) => (open ? "flex" : "none")};
        font-family: "Open Sans", sans-serif;
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.1875rem;
        color: #A5A5A5;
        text-decoration: none;
        text-transform: uppercase;
        padding: 20px;

        &:active {
          color: black;
        }
      }
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`

const BurgerMenu = ({open}) => (
    <StyledMenu open={open}>
        <nav>
            <a href="#statistics">Why Us</a>
            <a href="#benefits">Benefits</a>
            <a href="#pricing">Prices</a>
            <a href="#contact">Contact</a>
        </nav>
    </StyledMenu>
)

export default BurgerMenu;
