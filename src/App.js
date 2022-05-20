import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Feed from './components/profile/Feed'
import UserProfile from './components/profile/UserProfile'
import Login from './components/session/Login'
import Signup from './components/session/Signup'

const App = () => {
  const [ currentUser, setCurrentUser ] = useState({})
  const [loggedIn , setLoggedIn] = useState(false)

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true);
  }

  return (
    <Router>
    <Navbar />
    {loggedIn ? <h1>logged in!</h1> : null }
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/signup" element={<Signup loginUser={ loginUser } />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App
