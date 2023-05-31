import React from 'react'
import { Link } from 'react-router-dom'

const CityDetail = ({city}) => {
  return (
    <div className='w-full h-screen flex items-center'>
        <img className="w-96 h-[532px] object-cover rounded-2xl absolute z-10 left-44 shadow-xl"src={city.image} alt={city.name} />
        <div className='w-full flex flex-col justify-center items-end gap-4 p-28 py-36 relative bg-[#1f2937]'>
            <div className='flex flex-col w-1/2 gap-2'>
                <div className='relative -top-20 flex gap-3 text-zinc-400 font-semibold text-sm'>
                    <Link to={"/"}>Home</Link>
                    <p>/</p>
                    <Link to={"/cities"}>Cities</Link>
                    <p>/</p>
                    <p className='cursor-pointer'>Jujuy</p>
                </div>
                <h2 className='font-bold text-3xl text-white'>{city.name}</h2>
                <p className='text-gray-400'>{city.country}</p>
                <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus dolores iure recusandae architecto ullam maiores commodi quisquam. Sapiente ducimus esse, quia impedit eligendi numquam dolores et eum magnam perspiciatis?</p>
            </div>
        </div>
    </div>
  )
}

export default CityDetail