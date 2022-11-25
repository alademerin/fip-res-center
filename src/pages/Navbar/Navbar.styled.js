import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
export const StyledNavBar = styled.div`
  /* border-right: 3px solid #f8f8f8; */
  min-width: 20vw;
  height: 100vh;
  background: #393dc6;
  /* position: fixed; */
  overflow: scroll;
  h1 {
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 1000px) {
    position: absolute;
    z-index: 2;
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    padding-top: 30px;
    min-height: 1000px;
    /* width: 0; */
    /* display: block; */
  }
`
export const NLink = styled(NavLink)`
  color: #bdc2fb;
  font-weight: bold;
  text-decoration: none;
  &:active {
    color: red;
  }
`
export const HamburgerContainer = styled.div`
  display: none;
  margin-top: 10px;
  position: 'absolute';
  right: 0;
  @media screen and (max-width: 1000px) {
    z-index: 3;
    display: block;
    transition: width 5s;
  }
`
export const AppLogo = styled.img`
  height: 3rem;
`
export const Logo = styled.div`
  /* margin-right: 10px; */
`
export const LogoContainer = styled.div`
  min-height: 4rem;
  /* border-bottom: 1px solid black; */
  margin-bottom: 20px;
  padding: 5px;
  /* background: red; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
`
export const LogoutButton = styled.button`
  background: none;
  /* outline: none; */
  border: none;
  color: #bdc2fb;
  display: flex;
  /* text-align: center; */
  /* width: 100%; */
`
export const StyledNavItem = styled.div`
  height: 4rem;
  margin: 0px 5px;
  display: flex;
  /* justify-content: center; */
  /* width: 100%; */
  display: flex;
  padding: 0 20px;
  align-items: center;
  p {
    font-size: 20px;
    color: #bdc2fb;
  }
  &:hover,
  &:focus {
    background: #4850de;
    /* background: black; */
    border-radius: 5px;
    /* margin: 5px 2.5px; */
  }
  &:active {
    /* color: red; */
  }
`

export const HamburgerMenu = styled.div`
  margin-top: 50px;
  width: 100vw;
  /* display: none; */
`
// export const HBLink = styled(Link)`
//   display: flex;
// `
