import React, { useEffect, useState } from 'react'
import CityDetail from '../components/CityDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from '../components/Loading'
const CityDetailContainer = () => {
  const { id } = useParams()
  const [city, setCity] = useState(null)

  useEffect(() => {
    const fetchCity = async () => {
      const db = getFirestore()
      const cityRef = doc(db, 'cities', id)
      const docSnapshot = await getDoc(cityRef)

      if (docSnapshot.exists()) {
        setCity(docSnapshot.data())
      }
    }

    fetchCity()
  }, [id])

  return (
    <div>
      {city ? (
        <CityDetail city={city} />
      ) : (
        <Loading/>
      )}
    </div>
  )
}

export default CityDetailContainer
