import React from 'react'

const Header = () => {
  return (
    <>

    <div className=' p-3 bg-[#000214] flex justify-between '>
        {/* Logo */}
        <div>
            <h2 className='text-[#116A7B] px-[80px] text-2xl font-bold text' >
                Logo
            </h2>
        </div>
        {/* Sign up div */}
        <div>
            <input className='bg-inherit text-white border rounded-full p-2 px-6 ' placeholder='Email' type='email'/>
            <button className=' border p-2 px-12 mx-2 bg-white font-bold text-[#000214] rounded-full '>
                Sign Up
            </button>

        </div>

    </div>
      
    </>
  )
}

export default Header
