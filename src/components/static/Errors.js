import React from 'react'
import Error from './Error'

const Errors = ({errors}) => {
    const errorCards = errors.map((error, idx) => <Error key={idx} error={ error }/>);
  return (
    <ul>
    {errorCards}
    </ul>
  )
}

export default Errors