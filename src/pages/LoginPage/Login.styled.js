import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const DivBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 100vh;
  background: #3d40be;
  h2 {
    color: white;
    font-size: 20px;
    /* text-align: center; */
    /* margin-left: 20px; */
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const Logo = styled.img`
  /* transform: scale(2); */
  width: 10rem;
  hight: 5rem;
`
export const LoginForm = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
  img {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    img {
      display: block;
      /* height: 100px; */
      align-self: center;
    }
  }

  h2 {
    text-align: center;
  }
  label {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  input {
    padding: 5px 10px;
    height: 30px;
    width: 400px;
    border: none;
    background: #f3f3f4;
    font-size: 16px;
    border-radius: 5px;
    /* position: fixed; */
    margin-bottom: 20px;
    transition: outline 200ms;
    transition-timing-function: linear;
    @media screen and (max-width: 1000px) {
      width: 80vw;
    }
    :hover {
      /* background: white; */
      /* border: 5px solid ; */
      outline-style: solid;
      outline-color: rgb(61, 64, 190, 0.7);
    }
    :focus {
      /* background: white; */
      /* border: 5px solid ; */
      outline-style: solid;
      outline-color: rgb(61, 64, 190, 0.7);
      outline-width: 3px;
    }
  }
  button {
    width: 130px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background: rgba(61, 64, 190);
    color: white;
    font-size: 15px;
    @media screen and (max-width: 1000px) {
      width: 85vw;
    }
    :hover {
      background: #4850de;
      opacity: 0.9;
      transition: opacity 1s;
    }
  }
`
