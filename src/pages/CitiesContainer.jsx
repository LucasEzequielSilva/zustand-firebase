import React, { useEffect, useState } from 'react'
import { getDocs, getFirestore, collection } from 'firebase/firestore'
import Card from '../components/CitiesCard'

const CitiesContainer = () => {
  const [cities, setCities] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const db = getFirestore()
    const citiesRef = collection(db, 'cities')
    getDocs(citiesRef).then((querySnapshot) => {
      const citiesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setCities(citiesData)
    })
  }, [])

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center p-4">
      <div className="relative w-4/6 h-[40rem] rounded-xl bg-[url(https://images.pexels.com/photos/15785130/pexels-photo-15785130/free-photo-of-ciudad-casas-edificios-italia.jpeg)] bg-cover bg-center flex justify-center items-center text-6xl font-bold text-white after:w-full after:h-full after:content-['Cities'] after:absolute after:bottom-0 after:right-0 after:bg-black/30 after:z-10 after:flex after:justify-center after:items-center after:rounded-xl"></div>
      <div className="flex flex-col justify-center gap-8">
        <input
          className="relative z-20 -top-44 rounded p-2"
          type="text"
          placeholder="Search your city"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center gap-8">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => <Card city={city} key={city.id} />)
          ) : (
            <p>No hay coincidencias</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CitiesContainer
