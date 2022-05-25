import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Matches = ({loggedIn }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
  }, [loggedIn])

  fetch ("https://dog.ceo/api/breeds/list/all")
  .then(resp => resp.json())
  .then(dogData => console.log(dogData))

  return (
    <div>
      <h2>Matches</h2>
    </div>
  )
}

export default Matches