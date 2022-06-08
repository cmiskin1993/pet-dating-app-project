import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../stylesheets/UserProfile.css'


const UserProfile = ({ currentUser, loggedIn }) => {
    

    const navigate = useNavigate();

    useEffect(() => {
      if(!loggedIn){
        navigate('/login')
      }
    }, [loggedIn, navigate])
  
if(!loggedIn){
  return <h2>Loading...</h2>
}


  return (
      <div className="container" > 

            <img className="profile_photo" src={currentUser.formInputs.image} alt="profile_photo" />

            <h2>{currentUser.formInputs.firstName} {currentUser.formInputs.lastName} </h2>

        <div className="bio_container" >
            <h3>About Me </h3>
            <p>{currentUser.formInputs.bio}</p> 
        </div>
            
      </div>

  )
}

export default UserProfile