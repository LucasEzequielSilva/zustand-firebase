import React from 'react'

const Loading = () => {
  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center'>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
            </span>
    </div>
  )
}
export default Loading