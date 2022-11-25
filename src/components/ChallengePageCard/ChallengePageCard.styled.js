import styled from 'styled-components'

export const Card = styled.div`
  /* background: red; */
  transform: scale(0.9);
  width: 350px;
  height: 250px;
  border-radius: 5px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-right: 20px; */
  /* padding: 10px 0; */
  display: flex;
  h3,
  p {
    color: white;
    margin-bottom: 5px;
  }
`
export const Description = styled.a`
  color: white;
  margin-bottom: 5px;
  text-decoration: none;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  /* align-self: center; */
  text-align: center;
  justify-content: center;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  transition: opacity 0.9s;
  background: rgba(0, 0, 0, 0.5);
  h3 {
    margin-bottom: 0;
  }
  p {
    color: white;
  }
  opacity: 0;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`

export const CardButton = styled.button`

    display: ${({ completed }) => (completed ? 'none' : 'block')};
    background: #393dc6;
    border: none;
    padding: 5px 10px;
    /* width:100px; */
    align-self: center;
    border-radius: 3px;
    color: white;
    margin-top: 10px;
    font-size: 15px;
    :hover {
      background: #4850de;
      opacity: 0.9;
  }
`
