import styled from 'styled-components'

export const PageContainer = styled.div`
  font-size: 12px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
`
export const MentorContainer = styled.div`
  /* background: red; */
  padding: 20px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  /* min-width: 70vw; */
  /* @media screen and(max-width: 1000px) { */
  /*   width: 80vw; */
  /*   padding: 30px; */
  /* } */
`
export const MentorImage = styled.img`
  border-radius: 10px;
  height: 200px;
  width: 200px;
  object-fit: cover;
  margin-right: 20px;
`

export const MentorName = styled.h2`
  font-size: 30px;
  margin: 0;
`
export const MentorSoials = styled.div`
  margin: 10px 0;
  display: flex;
  color: ${({ color }) => color};
  a {
    color: inherit;
  }
`
export const OtherDetails = styled.div`
  margin-top: 5px;
  display: flex;
  /* justify-content: space-around; */
`
export const IconCircle = styled.div`
  /* background: green; */
  display: flex;
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid black;
  margin-right: 5px;
`
export const MentorRoleContainer = styled.div`
  width: 45%;
  p,
  h2 {
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
  }
  /* background: red; */
  /* padding: 0; */
`
export const ButtonsContainer = styled.div`
  /* background: red; */
`
export const Button = styled.button`
    background: #393dc6;
    border: none;
    padding: 8px 15px;
    /* width: 50%; */
    border-radius: 3px;
    color: white;
    font-size: 15px;
      margin-right:5px;
      margin-bottom:10px;
    :hover {
      background: #4850de;
      opacity: 0.9;

  @media and screen (max-width: 1000px) {
        background:red;
    display: flex;
    flex-direction: column;
  }
`
export const MentorTagContainer = styled.div`
  position: absolute;
  right: 0;
  /* background: yellow; */
  padding-top: 30px;
  padding-right: 20px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const MentorTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  -left-radius: 10px;
  -right-radius: 10px;
  border: 1px solid #dad7e8;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: ${({ mentor }) => (mentor ? '#daeaff' : '#F2F2F6')};
  p {
    color: ${({ mentor }) => (mentor ? '#112853' : '#4D4186')};
    font-size: 15px;
  }
  height: 30px;
  padding: 0px 10px;
`
