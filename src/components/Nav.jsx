import React from 'react'

const Nav = () => {
  return (
    <div className='p-5 text-white w-50px h-48px'>
        <div className='flex justify-between'>
        <img src="src\assets\image 1.png" alt="" className='w-50px h-48px'/>
            <div className='w-[50%] m-auto ml-4'>
                Creators Campus <br /> Connect
            </div>
            <ul className='flex justify-evenly w-[50%]'>
                <img src="src\assets\Storefront.png" alt="" className='w-50px h-50px'/>
                <li className='my-auto'>Event</li>
                <img src="src\assets\HandWaving.png" alt="" className='w-50px h-50px'/>
                <li className='my-auto'>Speakers</li>
                <img src="src\assets\CalendarBlank.png" alt="" className='w-50px h-50px'/>
                <li className='my-auto'>Schedule</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav