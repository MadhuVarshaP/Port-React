import React from 'react'
import { IoMdClose } from 'react-icons/io'
import profile from '../images/profile.png'
import { Link, useNavigate } from 'react-router-dom';

function Changeprofile() {
    let navigate = useNavigate();

        const handleBack = () => {
          navigate('/home')
        }
  return (
    <div className='flex justify-center'>
    <div className='flex flex-col w-[700px] rounded-xl bg-[#DBEFF9] m-[30px]  h-[900px]'>
      <div onClick={() => handleBack()}>
        <IoMdClose size={25} className='ml-auto m-3 z-20 cursor-pointer'/>
        </div>
        <div className='flex justify-center'>
            <p className='text-[40px]'>Change Profile</p>
        </div>
        <div className='p-[20px]'>
            <img className="h-32 w-32 rounded-full border-4 border-white  mx-auto my-4" src={profile} alt="Profile" />
            <p className='py-[10px]'>Enter Name</p>
            <input type='text' placeholder='Kaushik' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>User Level</p>
            <input type='text' placeholder='Beginner' className='rounded-xl w-[600px] p-[7px] mb-[10px]'/>
            <p className='py-[10px]'>Handle</p>
            <input type='text' placeholder='kf4d....3A13' className='rounded-xl w-[600px] p-[7px] mb-[10px]'/>
            <p className='py-[10px]'>Description</p>
            <textarea placeholder='Illustrator passionate about creative works and also UIUX Designer and Photographer. NFT Artist ,UIUX Designer and Photographer Illustrator passionate about creative works.' className='rounded-xl w-[600px] p-[7px]' />
            </div>
            <div className='flex justify-center my-[20px]'>
              <Link to='/profilepage' type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[200px] flex justify-center hover:font-medium'>Change Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default Changeprofile
