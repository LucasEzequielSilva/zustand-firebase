import React from 'react'
import { Link } from 'react-router-dom'

const CitiesCard = ({city}) => {
  return (
    <Link to={`/cities/${city.id}`} style={{backgroundImage:`url(${city.image})`}} className={`p-4 -top-44 shadow-md relative z-10 w-72 h-96  bg-cover bg-center rounded text-white flex flex-col justify-end gap-4 `}>
        <p>{city.name}</p>
        <p>{city.country}</p>
    </Link>
  )
}

export default CitiesCard