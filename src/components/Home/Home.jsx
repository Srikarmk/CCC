import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='mt-10 p-10 flex justify-between'>
            <div className='space-y-10 w-[70%]'>
                <h1 className='text-5xl text-white w-[30%]'>BRINGING TOGETHER</h1>
                <h2 className='text-2xl text-white font-semibold w-[45%]'><span className='text-[#36AEB2]'>CREATORS,</span> <span className='text-[#EFD140]'>ENTREPRENEAURS </span> AND <span className='text-[#FF9996]'>MENTORS</span> AT YOUR OWN CAMPUS </h2>
            </div>
            <div className='w-[30%]'>
                <div className='w-[400px] h-[400px] bg-[#141B24] flex justify-center items-center rounded-2xl'>
                    <div className='w-[350px] h-[350px] border-dashed border-red-500 border-2'></div>
                </div>

                {/* <img src="#" alt="" /> */}
            </div>
        </div>
        <div className="mt-20 w-2577px h-150px text-[150px] text-white">CREATORS CAMPUS CONNECT</div>
        <div className="w-2577px h-150px text-9xl text-white">CREATORS CAMPUS CONNECT</div>
    </div>
  )
}

export default Home