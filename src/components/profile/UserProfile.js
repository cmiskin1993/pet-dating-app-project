import React from 'react'
import '../stylesheets/UserProfile.css'


const UserProfile = ({ currentUser }) => {

  return (
    <section>
      <div className="container">

        <div className="photo_container">
            <img className='profile_photo'  src={currentUser.formInputs.image} alt="profile_photo" />
        </div>

            <div className='header'>
                <h2>{currentUser.formInputs.firstName} {currentUser.formInputs.lastName} </h2>
            </div>

            <div className="bio_container">
              <h3>About Me </h3>
                <p>{currentUser.formInputs.bio}</p> 
            </div>
            
      </div>
    </section>

    

    
  )
}

export default UserProfile