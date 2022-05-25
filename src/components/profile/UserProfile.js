import React from 'react'
import '../stylesheets/UserProfile.css'


const UserProfile = ({ currentUser }) => {

  return (
      <div className="container" > 

            <img className="profile_photo" src={currentUser.formInputs.image} alt="profile_photo" />

            <h2>{currentUser.formInputs.firstName} {currentUser.formInputs.lastName} </h2>

        <div className="bio_container" >
            <h3>About Me </h3>
            <p>{currentUser.formInputs.bio}</p> 
        </div>

            <button className="primary ghost">Follow</button>
            
      </div>

  )
}

export default UserProfile