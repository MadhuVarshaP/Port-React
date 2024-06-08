import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div className='flex flex-col justify-center items-center my-[40px]'>
      <p className='text-[50px]'>Create Profile</p>
      <input type='text' placeholder='Wallet Address' className='border rounded-xl px-[15px] mt-[40px] py-[8px] w-[400px]'/>
      <input type='text' placeholder='Handle' className='border rounded-xl px-[15px] my-[30px] py-[8px] w-[400px]'/>
      <input type='email' placeholder='Email id' className='border rounded-xl px-[15px] mb-[30px] py-[8px] w-[400px]' />
      <button type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl hover:text-white'> Connect Farcaster Handle </button>
      <button type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl my-[20px] hover:text-white'> Connect Lens Handle </button>
      <p className='w-[500px] text-center pt-[20px]'>Signing up with any of the option will create a wallet for you and information will be sent to your mail </p>
      <p className='py-[30px] hover:underline'>Not familiar with Wallet ? </p>
      <Link to='/profilepage' type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl hover:text-white'> Visit Profile </Link>
    </div>
  )
}

export default Profile
