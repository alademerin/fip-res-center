import styled from 'styled-components'

export const StyledHamburger = styled.div`
  position: absolute;
  top: 5;
  right: 0;
  padding: 10px 5px;
  display: none;
  @media screen and (max-width: 1000px){
    display: block;
  }
`
