import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../stylesheets/Forms.css'
import { baseUrl } from '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/Globals.js'

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