import React from 'react'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'
// import Input from "../../components/Input/Input";
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import sg from '../../assets/sg.jpeg'
import Todo from '../../components/Todo/Todo'
import {
  ChallengesContainer,
  DashBoardContainer,
  DashBoardContainerItem,
  ProfileContainer,
  ProfileDetails,
  ProfileImage,
} from './Dashboard.styled'
import AppConsumer from '../../store/store'
import { Header } from '../../components/Header/Header'
import './Dashboard.css'
// import './Challenges.css'

const Dashboard: React.FC = () => {
  const { app }: any = AppConsumer()
  return (
    <div style={{ width: '100vw' }}>
      <Header headerImg={sg} userName={app.user} />
      <DashBoardContainer>
        <DashBoardContainerItem>
          <div>
            <p>UPCOMING</p>
            {app.upcoming.map((todo: any) => (
              <Todo dateTime={todo.time} description={todo.description} soon={todo.soon} />
            ))}
            {/* <Todo /> */}
          </div>
          <ChallengesContainer>
            <p style={{ width: '100px' }}>CHALLENGES</p>
            <Swiper
              // style={{
              //   display: 'flex',
              //   maxWidth: '100vw',
              //   // background: 'red',
              // }}
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className='swiper-container'
            >
              {app.challenges.map((challenge: any) => (
                <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
                  <ChallengeCard
                    title={challenge.title}
                    description={challenge.description}
                    img={challenge.imgUrl}
                  />
                </SwiperSlide>
              ))}
              {/* <SwiperSlide> */}
              {/*   <ChallengeCard /> */}
              {/* </SwiperSlide> */}
              {/* <SwiperSlide> */}
              {/*   <ChallengeCard /> */}
              {/* </SwiperSlide> */}
              {/* <SwiperSlide> */}
              {/*   <ChallengeCard /> */}
              {/* </SwiperSlide> */}
            </Swiper>
          </ChallengesContainer>
        </DashBoardContainerItem>
        <ProfileContainer>
          <p>PROFILE IMAGE</p>
          <ProfileImage src={sg} />
          <ProfileDetails>
            <div>
              <p>NAME</p>
              <h2>{app.user}</h2>
              <p>EMAIL</p>
              <h2>{app.email}</h2>
              <p>PHONE</p>
              <h2>{app.phone}</h2>
              <p>COHORT</p>
              <h2>{app.cohort}</h2>
            </div>
            <div>
              <p>POSITION</p>
              <h2>{app.position}</h2>
              <p>TRACK</p>
              <h2>{app.track}</h2>
              <p>MENTOR</p>
              <h2>{app.mentor}</h2>
            </div>
          </ProfileDetails>
        </ProfileContainer>
      </DashBoardContainer>
    </div>
  )
}
export default Dashboard
