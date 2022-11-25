import { createBrowserRouter, RouterProvider, useLocation, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar/Navbar'
import Challenges from './pages/Challenges/Challenges'
import Dashboard from './pages/Dashboard/Dashboard'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import MentorPage from './pages/Mentor/MentorPage'
import LoginPage from './pages/LoginPage/LoginPage'
import AppConsumer from './store/store'
import Curriculum from './pages/Curriculum/Curriculum'

const RequireAuth = ({ children }: any) => {
  const { app }: any = AppConsumer()
  const location = useLocation()
  console.log(app.isLoggedIn)
  return app.isLoggedIn === true ? (
    children
  ) : (
    <Navigate to={'/login'} replace state={{ path: location.pathname }}></Navigate>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Navbar />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: '/mentors',
        element: <MentorPage />,
      },
      { path: '/challenges', element: <Challenges /> },
      { path: '/curriculum', element: <Curriculum /> },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  // {
  //   path: '/mentors',
  //   element: <MentorPage />,
  // },
  // {
  //   path: '/challenges',
  //   element: <Challenges />,
  // },
])
const App: React.FC = () => {
  const { app  }: any = AppConsumer()
  return (
    <div className='App'>{app.isLoggedIn ? <RouterProvider router={router} /> : <LoginPage />}</div>
  )
}

export default App
