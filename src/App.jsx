import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './assets/styles/styles.scss'
import { AppHeader } from './components/AppHeader'
import { StatisticPage } from './components/StatisticPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ContactEditPage } from './pages/ContactEditPage'
import { ContactDetailsPage } from './pages/ContactDetailsPage'
import { SignupPage } from './pages/SignupPage'
import { userService } from './services/userService'

function App() {
  const PrivateRoute = ({ children }) => {
    const loggedInUser = userService.getUser()
    return loggedInUser ? children : <Navigate to='/signup' />
  }
  return (
    <Router>
      <section className='main-app'>
        <AppHeader />
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path='/signup' element={<SignupPage />} />
          <Route
            path='/contact'
            element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/statistic'
            element={
              <PrivateRoute>
                <StatisticPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/contact/edit/:id'
            element={
              <PrivateRoute>
                <ContactEditPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/contact/edit/'
            element={
              <PrivateRoute>
                <ContactEditPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/contact/:id'
            element={
              <PrivateRoute>
                <ContactDetailsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </section>
    </Router>
  )
}

export default App
