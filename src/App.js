import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/Navbar'
import Feed from './components/profile/Feed'
import UserProfile from './components/profile/UserProfile'
import Login from './components/session/Login'
import Signup from './components/session/Signup'
import Logout from './components/session/Logout'
import { baseUrl } from '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/Globals.js'

const App = () => {
  const [ currentUser, setCurrentUser ] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);

  const loginUser = user => {
    setCurrentUser(user);
    setLoggedIn(true);
    localStorage.setItem('user_id', user.id);
  }

  const logoutUser = () => {
    setCurrentUser({});
    setCurrentUser(false)
    localStorage.removeItem('user_id')
  }

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if(userId && !loggedIn) {
      fetch(baseUrl + '/users/' + userId)
      .then(resp => resp.json())
      .then(data => loginUser(data))
    }
  }, [])

  return (
    <Router>
    <Navbar loggedIn={ loggedIn } logoutUser={ logoutUser } />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/signup" element={<Signup loginUser={ loginUser } />} />
        <Route path="/login" element={<Login loginUser={ loginUser }/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App
