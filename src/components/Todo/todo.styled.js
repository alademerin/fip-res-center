import styled from 'styled-components'

export const StyledTodo = styled.div`
  /* background: red; */
  display: flex;
  align-items: center;
  height: 80px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 10px;
  width: 500px;
  /* display: none; */

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`
export const TodoColorContainer = styled.div`
  /* background: orange; */
  /* height: 120px; */
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TodoColor = styled.div`
  background: ${({ soon }) => (soon ? 'red' : 'green')};
  height: 10px;
  width: 10px;
  border-radius: 3px;
`
export const TodoDescription = styled.div`
  /* background: green; */
  border-radius: 5px;
  margin-left: 10px;
  width: 450px;
  padding: 2px 10px;
  h2 {
    margin: 0;
  }
  ,
  p {
    margin: 0;
    margin-bottom: 5px;
    /* color: orange; */
  }
`
