import Mentor from '../../components/Mentor/Mentor'

const MentorPage: React.FC = () => {
  // const [isMessageModalOpened, setIsMessageModalOpened] = useState < boolean > false

  // console.log(isMessageModalOpened)
  return (
    <div style={{}}>
      <h1 style={{ paddingLeft: '25px' }}>Mentors</h1>
      <Mentor
        mentorName='Al-amin Abdulkareem'
        mentorImage='https://media-exp1.licdn.com/dms/image/C4D03AQEw5SaDefCjZg/profile-displayphoto-shrink_800_800/0/1660480818676?e=1675296000&v=beta&t=9H-kZ4ftEtnte1LqGlwNhrnTGdh9lHEHUfGX4wMWf2s'
        mentorRole='Frontend Engineer'
        mentorTeam='SAFSIMS'
      />
      <Mentor
        mentorName='James Vendi'
        mentorImage='https://media-exp1.licdn.com/dms/image/C4E03AQHUY1qEcoZpNA/profile-displayphoto-shrink_800_800/0/1611050012166?e=1675296000&v=beta&t=I8zTyoVqibhAk1LoluPfTq5CwHzxAEyNnttpVOSG-vM'
        mentorRole='UI/UX Designer'
        mentorTeam='SAFRecords'
      />
      {/* <Mentor /> */}
    </div>
  )
}

export default MentorPage
