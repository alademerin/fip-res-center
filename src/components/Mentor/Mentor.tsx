import React, { useState } from 'react'
import { BsGlobe, BsLinkedin, BsTwitter } from 'react-icons/bs'
import {
  Button,
  ButtonsContainer,
  IconCircle,
  MentorContainer,
  MentorImage,
  MentorName,
  MentorRoleContainer,
  MentorSoials,
  MentorTag,
  MentorTagContainer,
  OtherDetails,
  PageContainer,
} from '../../pages/Mentor/Mentor.styled'
import MeetingModal from '../Modals/MeetingModal'
import MessageModal from '../Modals/MessageModal'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface MentorProps {
  mentorName: string
  mentorImage: string
  mentorRole: string
  mentorTeam: string
}

const Mentor = ({ mentorImage, mentorName, mentorRole, mentorTeam }: MentorProps) => {
  const [isMessageModalOpened, setIsMessageModalOpened] = useState<boolean>(false)
  const [isMeetingModalOpened, setIsMeetingModalOpened] = useState<boolean>(false)

  const handleMessage = () => {
    setIsMessageModalOpened(false)
    setTimeout(() => {
      toast.success('Your Message has been sent')
    }, 2000)
  }

  const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000))

  const handleMeeting = () => {
    // alert('hi')
    setIsMeetingModalOpened(false)
    toast.promise(functionThatReturnPromise, {
      pending: 'Scheduling Meeting with Mentor',
      success: 'Your meeting has been scheduled 👌🏿',
      error: 'Promise rejected 🤯',
    })
  }

  return (
    <>
      <PageContainer>
        <MentorContainer>
          <div>
            <MentorImage src={mentorImage} alt='mentor' />
          </div>
          <div>
            <MentorName>{mentorName}</MentorName>
            <MentorSoials>
              <a href='https://www.linkedin.com' target={'_blank'} rel='noreferrer'>
                <IconCircle red>
                  <BsLinkedin size={20} />
                </IconCircle>
              </a>
              <a href='https://twitter.com' target={'_blank'}>
                <IconCircle>
                  <BsTwitter size={20} />
                </IconCircle>
              </a>
              <a href='https://www.google.com' target={'_blank'}>
                <IconCircle>
                  <BsGlobe size={20} />
                </IconCircle>
              </a>
            </MentorSoials>
            <OtherDetails>
              <MentorRoleContainer>
                <p>Role</p>
                <h2>{mentorRole}</h2>
              </MentorRoleContainer>
              <MentorRoleContainer>
                <p>Team</p>
                <h2>{mentorTeam}</h2>
              </MentorRoleContainer>
            </OtherDetails>
            <ButtonsContainer>
              <Button onClick={() => setIsMessageModalOpened(true)}>Send Message</Button>
              <Button onClick={() => setIsMeetingModalOpened(true)}>Request a meeting</Button>
            </ButtonsContainer>
          </div>
        </MentorContainer>
        <MentorTagContainer>
          <MentorTag>
            <p>Mentor</p>
          </MentorTag>
        </MentorTagContainer>
        <MeetingModal
          isOpened={isMeetingModalOpened}
          handleModalClosed={() => setIsMeetingModalOpened(false)}
          actionClicked={handleMeeting}
        />
        <MessageModal
          isOpened={isMessageModalOpened}
          handleModalClosed={() => setIsMessageModalOpened(false)}
          actionClicked={handleMessage}
        />
      </PageContainer>
      <ToastContainer />{' '}
    </>
  )
}

export default Mentor
