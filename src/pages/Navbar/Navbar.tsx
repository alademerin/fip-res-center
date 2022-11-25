import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AppConsumer from '../../store/store'
import {
  AppLogo,
  HamburgerContainer,
  LogoContainer,
  NLink,
  StyledNavBar,
  StyledNavItem,
} from './Navbar.styled'
import FlexisafLogo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faLaptopCode,
  faPersonChalkboard,
  faRightFromBracket,
  faTable,
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Hamburger from 'hamburger-react'

interface NavItemProps {
  pageName?: string
  routeName: string
  linkClicked?: () => void
  iconName?: IconProp
}

const NavItem: React.FC<NavItemProps> = ({ pageName, routeName, linkClicked, iconName }) => {
  return (
    <NLink to={routeName} onClick={linkClicked}>
      <StyledNavItem>
        <FontAwesomeIcon icon={iconName as IconProp} style={{ marginRight: '10px' }} size='lg' />
        <div>{pageName}</div>
      </StyledNavItem>
    </NLink>
  )
}
const Navbar: React.FC = () => {
  const handleLinkClicked = (): void => {
    // navigate('../mentors', { replace: true })

    dispatch({ type: 'LOGOUT' })
  }
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const { dispatch }: any = AppConsumer()
  const handleToggleBtn = () => {
    setIsVisible(!isVisible)
    console.log(isVisible)
  }
  return (
    <div style={{ display: 'flex' }}>
      <HamburgerContainer style={{position:'absolute',}}>
        <Hamburger toggled={isVisible} toggle={setIsVisible} />
      </HamburgerContainer>

      <StyledNavBar visible={isVisible}>
        <LogoContainer>
          <AppLogo src={FlexisafLogo} />
          {/* <p>Internship program resource center</p> */}
        </LogoContainer>
        <div>
          <NavItem iconName={faHome} routeName='/' pageName='Dashboard' />
          <NavItem iconName={faTable} routeName='curriculum' pageName='Curriculum' />
          <NavItem iconName={faPersonChalkboard} routeName='mentors' pageName='Mentors' />
          <NavItem iconName={faLaptopCode} routeName='challenges' pageName='Challenges' />
          <NavItem
            iconName={faRightFromBracket}
            routeName='#'
            pageName='Logout'
            linkClicked={handleLinkClicked}
          />
          {/* <LogoutButton */}
          {/*   onClick={() => { */}
          {/*     dispatch({ type: 'LOGOUT' }) */}
          {/*   }} */}
          {/* > */}
          {/*   Logout */}
          {/* </LogoutButton> */}
        </div>
      </StyledNavBar>

      <div style={{}}>
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
