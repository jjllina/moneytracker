import {BrowserRouter as Router} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import PageNotFound from './components/PageNotFound'
import {Route, Routes} from 'react-router-dom'
import AppNav from './components/AppNav'
import {UserProvider} from './UserContext'
import {useState} from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import AddIncome from './pages/AddIncome'
import ViewIncome from './pages/ViewIncome'
import ViewAnnual from './pages/ViewAnnual'
import AddExpense from  './pages/AddExpense'
import ViewExpense from './pages/ViewExpense'
import Logout from './pages/Logout'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [user, setUser] = useState({
  id : null
  })

  const unsetUser = () => {
    localStorage.clear();
  }

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <Container fluid className="m-0 p-0">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/addIncome" element={<AddIncome />} />
            <Route exact path="/viewIncome" element={<ViewIncome />} />
            <Route exact path="/viewAnnual" element={<ViewAnnual />} />
            <Route exact path="/addExpense" element={<AddExpense />} />
            <Route exact path="/viewExpense" element={<ViewExpense />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </UserProvider>
  )
}

export default App