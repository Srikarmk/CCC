import React from 'react'

const Nav = () => {
  return (
    <div className='p-5 text-white'>
        <div className='flex justify-between'>
            <div className='w-[50%]'>
                Creators Campus Connect
            </div>
            <ul className='flex justify-evenly w-[50%]'>
                <li>Event</li>
                <li>Speakers</li>
                <li>Schedule</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav