import React from 'react'
import '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/components/stylesheets/MatchesCard.css'



const MatchesCard = ({ pet, deleteCard }) => {

  const handleDelete = () => {
    deleteCard(pet)
  }

  return (
          <li className="card">
                    <div className="top-card">
                      <img src={pet.image} alt='pet_image'></img>
                    </div>

                      <h3>{pet.name}</h3>
                      <p>Age: {pet.age} </p>
                      <p>Gender: {pet.gender} </p>

                      <div className="vl"></div>
                      <p> {pet.bio} </p>
                      <button onClick={handleDelete}>Adopt Me</button>
          </li>
  )
}

export default MatchesCard