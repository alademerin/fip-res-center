import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderProfile, StyledHeader } from './Header.styled'

interface HeaderProps {
  headerImg: string
  userName: string
}

export const Header = ({ headerImg, userName }: HeaderProps) => {
  return (
    <>
      <StyledHeader>
        {/* <div style={{ marginRight: '20px' }}> */}
        {/* <FontAwesomeIcon icon={faBars} size='xl' /> */}
        {/* </div> */}
        <HeaderProfile>
          <img src={headerImg} alt='profile' />
          <h2>{userName}</h2>
        </HeaderProfile>
      </StyledHeader>
      <div></div>
    </>
  )
}
