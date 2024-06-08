import React from 'react'
import { Link } from 'react-router-dom'

function Page2() {
  return (
    <div className='flex flex-col justify-center items-center my-[40px]'>
        <p className='text-[50px]'>Choose Your Ship</p>
        <div className='m-[20px] border-solid border-2 border-black rounded-2xl h-[500px] w-[700px] flex flex-col justify-center'>
            <p className='text-[30px] p-[20px]'>Choose Which College are you from ?</p>
            <div className='grid grid-cols-3 gap-4 p-[20px]'>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>IIT</p>
              <p className='text-gray-500'>Mumbai</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>SRM</p>
              <p className='text-gray-500'>Chennai</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Jain</p>
              <p className='text-gray-500'>Bangalore</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>NIT</p>
              <p className='text-gray-500'>Delhi</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>IISc</p>
              <p className='text-gray-500'>Bangalore</p>
              </div>
              <div className='rounded-md bg-[#EAF6F8] p-[10px] hover:shadow-lg flex flex-col justify-center items-center'> 
              <p>Create New Ship</p>
              <p className='text-gray-500'>Ship Name</p>
              </div>
            </div>
            <div className=' flex justify-between m-[30px]'>
            <Link to='/1' type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Previous </Link>
            <Link to='/3' type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl  hover:text-white  w-[120px] flex justify-center'> Next </Link>
            </div>
        </div>
    </div>
  )
}

export default Page2
