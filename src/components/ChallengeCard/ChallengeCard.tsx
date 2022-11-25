import { maxHeight } from '@mui/system'
import React from 'react'
import { ChallengeCardContainer, ChallengeImage } from './ChallengeCard.styled'

interface ChallengeCardProps {
  title: string
  description: string
  img: string
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, description, img }) => {
  return (
    <ChallengeCardContainer>
      <ChallengeImage src={img} alt='challengeCard' />
      <div>
        <h2>{title}</h2>
          <p>{description}</p>
      </div>
      <button>Done</button>
    </ChallengeCardContainer>
  )
}

export default ChallengeCard
