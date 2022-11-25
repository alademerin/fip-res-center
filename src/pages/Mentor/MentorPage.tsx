import Mentor from '../../components/Mentor/Mentor'

const MentorPage: React.FC = () => {
  // const [isMessageModalOpened, setIsMessageModalOpened] = useState < boolean > false

  // console.log(isMessageModalOpened)
  return (
    <div style={{ width: '80vw' }}>
      <h1 style={{ paddingLeft: '25px' }}>Mentors</h1>
      <Mentor
        mentorName='Gbenga Okonkwo'
        mentorImage='https://images.unsplash.com/photo-1612720572242-fefde96650f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYW4lMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        mentorRole='Frontend Engineer'
        mentorTeam='SAFRecords'
      />
      <Mentor
        mentorName='Abubakar Williams'
        mentorImage='https://images.unsplash.com/photo-1512372923090-7b14fb496d44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMG1hbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        mentorRole='Backend Engineer'
        mentorTeam='SAFApply'
      />
      {/* <Mentor /> */}
    </div>
  )
}

export default MentorPage
