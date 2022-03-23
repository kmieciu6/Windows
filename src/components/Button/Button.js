import styled, { css } from "styled-components";

const Button = styled.button`
  background: #08A6E4;
  padding: 22px 157px;
  box-shadow: 5px 10px 14px #07ACE629;
  border-radius: 40px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  border: none;

@media (max-width: 768px) {
  padding: 22px 92px;
  display: block;
  margin: 0 15px;
}
  
  ${props => props.small && css`
    padding: 16px 57px;
    box-shadow: none;
    font-size: 0.8125rem;
    position: absolute;
    bottom: -25px;
  `}
  
  ${props => props.redish && css`
    background: #FB3B64;
  `}
  
  ${props => props.primary && css`
    box-shadow: 5px 10px 14px rgba(7, 172, 230, .16);
  `}
  
  ${props => props.green && css`
    background: #55DFB4;
  `}
  
  ${props => props.medium && css`
    border: none;
    padding: 20px 97px;
    font-size: 0.8125rem;
  `}
`

export default Button;
