import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Matches = ({loggedIn }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
  }, [loggedIn])

  return (
    <div>
      <h2>Matches</h2>
    </div>
  )
}

export default Matches