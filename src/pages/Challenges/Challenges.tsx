import React, { useEffect } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import ChallengePageCard from '../../components/ChallengePageCard/ChallengePageCard'
import { Container } from './Challenges.styled'
import AppConsumer from '../../store/store'
// import './Challenges.css'

const Challenges = () => {
  const { app, dispatch }: any = AppConsumer()
  const handleDoneBtnClicked = (id: number) => {
    dispatch({ type: 'COMPLETE_CHALLENGE', payload: id })
  }
  return (
    <Container>
      <h1>Challenges</h1>
      <p>Pending</p>
      {/* <Row> */}
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // style={{ maxWidth: '100vw', height: 'fit-content' }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            // width: 640,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // loop={true}
        className='swiper-container'
        // loop={true}
        // className='mySwiper'
      >
        {app.challenges ? (
          app.challenges
            .filter((challenge: any) => challenge.completed === false)
            .map((challenge: any) => (
              <SwiperSlide>
                <ChallengePageCard
                  id={challenge.id}
                  img={challenge.imgUrl}
                  title={challenge.title}
                  details={challenge.description}
                  href={challenge.href}
                  challengeCardClicked={handleDoneBtnClicked}
                />
              </SwiperSlide>
            ))
        ) : (
          <p>No Upcoming challenges</p>
        )}
        {/* </ChallengePageCard> */}
        <p>Completed</p>
      </Swiper>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // style={{ maxWidth: '100vw', height: 'fit-content' }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            // width: 640,
            slidesPerView: 1,
            spaceBetween: 50,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            // slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // loop={true}
        className='swiper-container'
        // loop={true}
        // className='mySwiper'
      >
        {app.challenges
          .filter((challenge: any) => challenge.completed === true)
          .map((challenge: any) => (
            <SwiperSlide>
              <ChallengePageCard
                id={challenge.id}
                img={challenge.imgUrl}
                title={challenge.title}
                details={challenge.description}
                href={challenge.href}
                completed
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default Challenges
