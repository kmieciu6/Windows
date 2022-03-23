import styled, { css } from "styled-components";

const Circle = styled.div`
  background: #FB3B64;
  width: 63px;
  height: 63px;
  border-radius: 50%;

  ${props => props.primary && css`
    background: #08A6E4;
  `}

  ${props => props.green && css`
    background: #55DFB4;
  `}
`

export default Circle;
