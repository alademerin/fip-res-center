import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { StyledHamburger } from './Hamburger.styled'

interface HamburgerProps {
  hamburgerClicked: () => void
}

const Hamburger = ({ hamburgerClicked, }: HamburgerProps) => {
  return (
    <StyledHamburger onClick={hamburgerClicked}>
      <FontAwesomeIcon icon={faBars} size='3x' />
    </StyledHamburger>
  )
}

export default Hamburger
