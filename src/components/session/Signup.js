import React, { useState } from 'react'
import '../stylesheets/Forms.css'
import { baseUrl, headers } from '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/Globals.js'
import { useNavigate } from 'react-router-dom'


const Signup = ({loginUser}) => {

const [formInputs, setFormInputs] = useState({
  username:'',
  firstName:'',
  lastName:'',
  image:'',
  bio:''
})

const navigate = useNavigate();

const handleChange = event => {
  setFormInputs({
    ...formInputs,
    [event.target.name]: event.target.value
  })
}


const handleSubmit = e => {
  e.preventDefault();

  fetch(baseUrl + '/users', {
    method: "POST",
    headers,
    body: JSON.stringify({ formInputs })
  })
  .then(resp => resp.json())
  .then(data => {
    loginUser(data);
    navigate('/profile'); 

  })
  setFormInputs({
    username:'',
    firstName:'',
    lastName:'',
    image:'',
    bio:''
  })
}

  return (
    <div>
      <h2>One step closer to <br/> finding your bestfriend</h2>

        <form onSubmit={ handleSubmit } id="form-container">
        <div> 
            <label> Username:</label>
            <input type="text" name='username' value={ formInputs.username } onChange={handleChange} />
          </div>
          <div> 
            <label> First Name:</label>
            <input type="text" name='firstName' value={ formInputs.firstName } onChange={handleChange} />
          </div>
          <div> 
            <label> Last Name:</label>
            <input type="text" name='lastName' value={ formInputs.lastName } onChange={handleChange} />
          </div>
          <div> 
            <label> Photo:</label>
            <input type="text" name='image' value={ formInputs.image } onChange={handleChange} />
          </div>
          <div> 
            <label> Bio:</label>
            <textarea name='bio' value={ formInputs.bio } onChange={handleChange} />
          </div>

          <input type="submit" value="submit" />
        </form>

    </div>
  )
}

export default Signup