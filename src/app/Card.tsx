import React from 'react'

const Card = () => {
  return (
    <div className='h-[170px] w-[100%] pl-5 pr-5 gap-4 flex flex-col'>
        <div className='flex  justify-between'>
            <div className='w-8 h-8 bg-zinc-600 rounded-full'></div>
            <h2>60 min</h2>
        </div>
        <h2 className='font-semibold'>Weekly Meeting . 10 AM</h2>
        <h2 className='line-clamp-1'>Jessica Anderson,Julia Foster,Mohammed ashif</h2>
        <div className='w-full h-[1px] bg-zinc-500'></div>
        
    </div>
  )
}

export default Card