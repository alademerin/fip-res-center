import styled from 'styled-components'

export const ModalView = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  max-height: 700px;
  z-index: 3;
  /* border: 1px solid red; */
  background: #fff;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-content: center;
  /* width: 100%; */
  border-radius: 5px;
  transition: width 2s, height 4s;
  @media screen and (max-width: 1000px) {
    max-width: 300px;
  }

  h2 {
    margin-top: 30px;
    padding: 0;
    /* color: red; */
    /* background: red; */
  }
`
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 2;
  /* border: 1px solid red; */
  background: rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 1000px) {
    width:100%;
  }
`
export const ModalContent = styled.div`
  /* background: red; */
  /* margin-top: 40px; */
  p {
    color: #aaa;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 2px;
  }
  input {
    border: 1px solid #aaa;
    padding: 5px;
    height: 30px;
    width: 480px;
    border-radius: 5px;
  }
  textarea {
    width: 480px;
    height: 10rem;
    border: 1px solid #aaa;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    resize: none;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const ModalButton = styled.button`
  /* position: absolute; */
  /* right: 20px; */
  /* bottom: 20px; */
align-self:flex-end;  
  background: ${({ action }) => (action ? '#393dc6' : '#f5f5f5')};
    border: ${({ action }) => (action ? 'none' : '1px solid #000')};
  /* padding: 2px 8px; */
  padding:0;
  width: 50px;
  height:30px;
  margin-bottom:20px;
    border-radius: 3px;
  color: ${({ action }) => (action ? 'white' : '#000')};
    font-size: 15px;
      margin-right:5px;
    :hover {
      background: #4850de;
      opacity: 0.9;
`
// export const ModalContent = styled.div`

// `
