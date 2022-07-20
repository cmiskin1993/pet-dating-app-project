import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MatchesCard from '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/components/profile/MatchesCard.js';
import '/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/components/stylesheets/MatchesCard.css';
import Filters from "/Users/cnestel-admin/Development/code/phase-2/phase-2-project-2/pet-dating-app-project/src/components/profile/Filters.js";




const MatchesList = ({loggedIn }) => {

  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ gender: "all" });

  const handleChangeType = (gender) => {
    setFilters({ gender: gender });
  }
  
const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
      let url = "http://localhost:3001/pets";

      fetch(url)
      .then((resp) => resp.json())
      .then((petsArray) => {
        setPets(petsArray);
      })
  }, [loggedIn, navigate])

  const handlePetFilterClick = () => {

    let url = "http://localhost:3001/pets";
    if (filters.gender !== "all") {
      url += `?gender=${filters.gender}`;
    }
    fetch(url)
    .then((resp) => resp.json())
    .then((petsArray) => {
      setPets(petsArray);
    });
}

const deleteCard = pet => {
  setPets(pets.filter(pets => pets.id !== pet.id))
}
  

  return (
  
    <ul className="cards">
        <Filters onChangeType={handleChangeType} onPetFilterClick={handlePetFilterClick} />
            <div>
                {pets.map((pet) => (
                <MatchesCard key={pet.id} pet={pet} deleteCard={deleteCard} />
                ))}
            </div>
    </ul>

  )
}

export default MatchesList
