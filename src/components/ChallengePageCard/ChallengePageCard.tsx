import React from 'react'
import { Card, CardButton, Description, Details } from './ChallengePageCard.styled'

interface ChallengePageCardProps {
  id: number
  img: string
  title: string
  details: string
  href: string
  completed?: boolean
  challengeCardClicked?: (id: number) => void
}

const ChallengePageCard = ({
  id,
  img,
  title,
  details,
  href,
  completed,
  challengeCardClicked,
}: ChallengePageCardProps) => {
  return (
    <Card img={img}>
      <Details>
        <h3>{title}</h3>
        <Description href={href} target='_blank' rel='noopener noreferrer'>
          {details}
        </Description>
        <CardButton onClick={() => challengeCardClicked?.(id)} id={id} completed={completed}>
          Done
        </CardButton>
      </Details>
    </Card>
  )
}

export default ChallengePageCard
