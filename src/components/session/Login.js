import React, { useState, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Forms.css'
import ReactSwitch from 'react-switch';
import { baseUrl } from '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/Globals.js'

export const ThemeContext = createContext(null)

const Login = ( {loggedIn, loginUser, addErrors, clearErrors } ) => {
const [username, setUserName] = useState("");
const [users, setUsers] = useState([]);

const navigate = useNavigate();

const handleChange = e => {
  setUserName(e.target.value);
}

const handleSubmit = e => {
  e.preventDefault();

  const user = users.find(user => user.formInputs.username.toLowerCase() === username.toLowerCase());
  if(user) {
    loginUser(user);
  }else{
    addErrors(["username does not exist"])
  }
}

useEffect(() => {
  if(loggedIn){
    navigate('/profile')
  }
  fetch(baseUrl + "/users/")
  .then(resp => resp.json())
  .then(data => setUsers(data))

return () => {
clearErrors();
}
}, [loggedIn])

const [theme, setTheme] = useState ("light")

const toggleTheme = () => {
  setTheme((current) => (current === "light" ? "dark" : "light"))
}


  return (
    <ThemeContext.Provider value={ {theme, toggleTheme} }>
        <div id={theme} >
          <h2>Login</h2>
            <form onSubmit={ handleSubmit } id="form-container">
              <div>
              <label htmlFor='username'>Username: </label>
              <input type='text' name='username' id='username' onChange={handleChange} value={ username }/>
              </div>
              <input type="submit" value='Login' />
            </form>
                <div className="switch">
                  <lable> {theme === "light" ? "Light Mode": "Dark Mode" } </lable>
                  <ReactSwitch onChange={toggleTheme} checked={theme ==="dark"} />
                </div>
        </div>
    </ThemeContext.Provider>
  )
}

export default Login