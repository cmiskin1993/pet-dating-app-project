import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Forms.css'
import { baseUrl } from '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/Globals.js'

const Login = ( {loginUser } ) => {
const [username, setUserName] = useState("");
const [users, setUsers] = useState([]);

const navigate = useNavigate(0);

const handleChange = e => {
  setUserName(e.target.value);
}

const handleSubmit = e => {
  e.preventDefault();

  const user = users.find(user => user.formInputs.username.toLowerCase() === username.toLowerCase());
  if(user) {
    loginUser(user);
    navigate("/profile")
  }
}

useEffect(() => {
  fetch(baseUrl + "/users/")
  .then(resp => resp.json())
  .then(data => setUsers(data))
}, [])

  return (
    <div>
      <h2>Login</h2>
        <form onSubmit={ handleSubmit } id="form-container">
          <div>
          <label htmlFor='username'>Username: </label>
          <input type='text' name='username' id='username' onChange={handleChange} value={ username }/>
          </div>
          <input type="submit" value='Login' />
        </form>
    </div>
  )
}

export default Login