import React from 'react'
import { Container, DivBlock, LoginForm, Logo } from './Login.styled'
import FlexisafLogo from '../../assets/logo.svg'
import AppConsumer from '../../store/store'
const LoginPage = () => {
  const { app, dispatch }: any = AppConsumer()

  const loginClicked = (): void => {
    // const navigate = useNavigate()
    dispatch({ type: 'LOGIN' })
    // navigate('/')
  }

  return (
    <>
      {app.isLoggedIn === false && (
        <Container>
          <DivBlock>
            <div>
              <Logo src={FlexisafLogo} />
            </div>
            <div>
              <h2>Internship Program Resource Center</h2>
            </div>
          </DivBlock>
          <LoginForm>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src='https://uploads-ssl.webflow.com/606c1bd6b947503e4c755fe2/606c20478671192ef5a51ff0_fs-logo.svg'
                alt='logo'
              />
              <h2>Login to FIP Resource Center</h2>
              <label>Email</label>
              <input type='text' />
              <label>Password</label>
              <input type='password' />
              <button onClick={loginClicked}>Login</button>
            </div>
          </LoginForm>
        </Container>
      )}
    </>
  )
}

export default LoginPage
