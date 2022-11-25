import styled from 'styled-components'

export const DashBoardContainer = styled.div`
  padding: 10px 20px;
  /* background: papayawhip; */
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  /* height: 97vh; */
  width: 70vw;
  /* height: 80vh; */
  /* overflow-y: scroll; */
  p {
    font-weight: bold;
    color: #aaa;
    margin-top: 0;
  }
  img {
  }
  @media screen and (max-width: 1000px) {
    width: 100vw;
    height: 100vh;
    justify-items: center;
    /* margin-right: 0; */
  }
`

export const DashBoardContainerItem = styled.div`
  margin-right: 40px;
  /* background: yellow; */
  width: 500px;
  /* height: 100vh; */
  padding-right: 30px;
  /* max-width: 500px; */
  @media screen and (max-width:1000px){
    margin-right: 0;
    border-right:0;
    padding-right:0;
  }
  }
`
export const DashboardButton = styled.button`
  background: #393dc6;
  border: none;
  padding: 15px 20px;
  width: 100%;
  border-radius: 3px;
  color: white;
  font-size: 20px;
  :hover {
    background: #4850de;
    opacity: 0.9;
  }
`
export const ProfileContainer = styled.div`
  /* width: 300px; */
  /* background: red; */
  border-left: 1px solid #f4f4f4;
  height: 95vh;
  margin-right: 20px;
  padding-left: 20px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const ProfileDetails = styled.div`
  display: flex;
  /* margin-right: 20px; */
  /* background: yellow; */
  div {
    /* width: 70%; */
    /* max-width: 70%; */
    margin-right: 20px;
    /* background: red; */
  }
`
export const ProfileImage = styled.img`
  border-radius: 10px;
  max-height: 250px;
  min-width: 250px;
  object-fit: cover;
  max-width: 250px;
`
export const ChallengesContainer = styled.div`
  margin-top: 20px;
  /* max-width: 700px; */
`
