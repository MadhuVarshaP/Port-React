import React from 'react'
import { IoMdClose } from "react-icons/io";
import { redirect, useNavigate } from 'react-router-dom';

function Createproposal() 

{  let navigate = useNavigate();

    const handleBack = () => {
      navigate('/proposals')
    }
  return (
    <div className='flex justify-center'>
    <div className='flex flex-col w-[700px] rounded-xl bg-[#DBEFF9] m-[30px]  h-[800px]'>
      <div onClick={() => handleBack()}>
        <IoMdClose size={25} className='ml-auto m-3 z-20 cursor-pointer'/>
        </div>
        <div className='flex justify-center'>
            <p className='text-[40px]'>Create Proposal</p>
        </div>
        <div className='p-[20px]'>
            <p className='py-[10px]'>Enter Proposal Name</p>
            <input type='text' placeholder='ShipitDAO' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>Proposal Number</p>
            <input type='text' placeholder='23' className='rounded-xl w-[600px] p-[7px] mb-[10px]'/>
            <p className='py-[10px]'>Handle</p>
            <input type='text' placeholder='kf4d....3A13' className='rounded-xl w-[600px] p-[7px] mb-[10px]'/>
            <p className='py-[10px]'>Description</p>
            <textarea placeholder='Solidity to Java Translator？ Can We Convert Solidity file to Java file and which Blockchain in scalable for metaverse ?' className='rounded-xl w-[600px] p-[7px]'/>
            <p className='py-[10px]'>When is the Proposal Done</p>
            <input type='text' placeholder='29 March 2024' className='rounded-xl w-[600px] p-[7px]'/>
            <div className='flex justify-center my-[20px]'>
              <button type='submit' className='bg-[#2DA2B5] p-[10px] rounded-3xl text-white  w-[200px] flex justify-center hover:font-medium'>Create Proposal</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Createproposal
