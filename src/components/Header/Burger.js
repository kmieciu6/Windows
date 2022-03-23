import React from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";

const StyledBurger = styled.button`
  @media (max-width: 768px) {
    border: none;
    
    span {
      display: block;
      width: 20px;
      height: 2px;
      background: #08A6E4;
      margin-bottom: 3px;

      &:first-child {
        transform: ${({open}) => (open ? "rotate(45deg) translate(2px, 5px)" : "rotate(0) translate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({open}) => (open ? "0" : "1")};
      }

      &:last-child {
        transform: ${({open}) => (open ? "rotate(-45deg) translate(2px, -5px)" : "rotate(0) translate(0)")};
      }
    }
    margin: 30px;
  }
  @media (min-width: 769px) {
    display: none;
  }
`

const Burger = ({open, setOpen}) => {
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </StyledBurger>
            <BurgerMenu open={open}/>
        </>
    )
}

export default Burger;
