import { maxHeight } from '@mui/system'
import React from 'react'
import { ChallengeCardContainer, ChallengeImage } from './ChallengeCard.styled'

interface ChallengeCardProps {
  title: string
  description: string
  img: string
  id: number
  // doneBtnClicked: () => void
}

interface ButtonProps {
  // doneBtnClicked: () => void
}

// const Button = ({ doneBtnClicked }: ButtonProps) => {
//   return <button onClick={doneBtnClicked}>Done</button>
// }

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
  img,
  id,
  // doneBtnClicked,
}) => {
  return (
    <ChallengeCardContainer id={id}>
      <ChallengeImage src={img} alt='challengeCard' />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {/* <Button doneBtnClicked={() => doneBtnClicked(id)} id={id} /> */}
    </ChallengeCardContainer>
  )
}

export default ChallengeCard
