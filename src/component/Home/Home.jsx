import React from 'react'
import avatar from "../../assets/avataaars.svg"

export default function Home() {
  return (
    <>
   <div className="bg-[#1ABC9C] h-[80vh] flex justify-center items-center">
  <div className="flex flex-col items-center justify-center gap-3">
    <img src={avatar} alt="" className="w-3/4" /> 
    <h1 className='text-white font-bold capitalize pt-4 text-4xl'>START FRAMEWORK</h1>
    <div className="flex items-center justify-center gap-2">
      <hr className='text-white border-[3px] border-white w-20'/>
      <i className="fa-solid fa-star text-white text-2xl"></i>
      <hr className='text-white border-[3px] border-white w-20'/>
    </div>
    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
 
</div>

    </>
  )
}
