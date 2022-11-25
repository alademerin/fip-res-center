import styled from 'styled-components'

export const StyledHeader = styled.div`
  height: 4rem;
  /* background: papayawhip; */
  display: none;
  /* width: 100vw; */
  padding: 2px 20px;
  align-items: center;
  border-bottom: 1px solid #f8f8f8;
  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100vw;
    /* display: block; */
  }
`

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 50px;
    width: 50px;
    border-radius: 100px;
    object-fit: cover;
  }
  h2 {
    margin-left: 20px;
  }
`
