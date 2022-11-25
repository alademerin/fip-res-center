import { createContext, useContext, useReducer } from 'react'

const initialState = {
  user: 'Sai Makogi',
  email: 's.makogi@fip.io',
  phone: '0903 555 0943',
  cohort: 'T3-2022',
  position: 'Frontend Intern',
  mentor: 'Gbenga Okonkwo',
  track: 'Beginner',
  isLoggedIn: false,
  upcoming: [
    {
      time: 'TODAY 11:00AM to 5:00PM',
      description: 'Perfomance Tracking Session',
      soon: true,
    },
    {
      time: 'SUNDAY 5:30PM to 7:00PM',
      description: 'Meeting with Mentor',
      soon: false,
    },
  ],
  challenges: [
    {
      id: 1,
      title: 'Tic Tac Toe Game',
      imgUrl:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/l12uqethss9x3xcfmiki.jpg',
      description:
        "Your JS knowledge will be challenged in this fun project, where you'll build a two-player game. You'll write the logic for the game and how to test for win conditions.",
      completed: false,
      href: 'https://www.frontendmentor.io/challenges/connect-four-game-6G8QVH923s',
    },
    {
      id: 2,
      title: 'News homepage',
      imgUrl:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/abbzt6kmkawmpbj7evxx.jpg',
      description:
        'This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities! ',
      completed: false,
      href: 'https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl',
    },
    {
      id: 3,
      title: 'Password generator app',
      imgUrl:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto:good,w_900/Challenges/nvjjyhvhqfwnjseojdgg.jpg',
      description:
        "This app will be an excellent test of your HTML, CSS, and JS skills. You'll build custom form controls and use JavaScript to generate random passwords.",
      completed: false,
      href: 'https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh',
    },
    {
      id: 4,
      title: 'Entertainment web app',
      imgUrl:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto:good,w_900/Challenges/zurpxclpp6gavavnw6d2.jpg',
      description:
        'This multi-page entertainment web app will have you working with JSON data, routing, state management, and search functionality.',
      completed: true,
      href: 'https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X',
    },
    {
      id: 5,
      title: 'Advice Generator App',
      imgUrl:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/sfl8uqvq75wnnr559ksp.jpg',
      description:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      completed: false,
      href: 'https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db',
    },
    {
      id: 6,
      title: 'Interactive comments section',
      imgUrl:
        'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/i8zblmqsbqixz1tbhc0v.jpg',
      description:
        "This is project will put your JavaScript skills to the test. We provide a JSON file to pull the data, but it's also a perfect project to build as a full-stack CRUD app!",
      completed: true,
      href: 'https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9',
    },
  ],
}

export const AppContext = createContext(initialState)

export const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true }
    case 'LOGOUT':
      return { ...state, isLoggedIn: false }
    case 'COMPLETE_CHALLENGE': {
      const id = payload
      return {
        ...state,
        challenges: state.challenges.map(c => (c.id === id ? { ...c, completed: true } : c)),
      }
    }
    default:
      throw new Error()
  }
}

export const AppProvider = ({ children }) => {
  const [app, dispatch] = useReducer(reducer, initialState)
  return <AppContext.Provider value={{ app, dispatch }}>{children}</AppContext.Provider>
}

export default function AppConsumer() {
  return useContext(AppContext)
}
