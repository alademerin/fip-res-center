import styled from 'styled-components'

export const ChallengeCardContainer = styled.div`
  /* background: red; */
  width: 477px;
  align-items: center;
  display: flex;
  padding: 10px 10px;
  border-radius: 5px;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  max-height: 450px;
  h2,
  p {
    padding: 0 60px;
    margin-bottom: 10px;
    /* overflow: hidden; */
    /* text-align: center; */
  }
  button {
    height: 40px;
    border-radius: 5px;
    width: 75px;
    align-self: flex-end;
    background: #393dc6;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    padding: 2px 5px;
  }
  @media screen and (max-width: 1000px) {
    /* height: 300px; */
    width: 400px;
  }
`

export const ChallengeImage = styled.img`
  height: 250px;
  border-radius: 5px;
  width: 100%;
  object-fit: cover;
  /* margin-bottom: 5px; */
`
