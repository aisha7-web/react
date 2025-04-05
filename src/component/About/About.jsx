import React from 'react'

export default function About() {
  return (
     <>
      <div className="bg-[#1ABC9C] h-[80vh] flex justify-center items-center">
     <div className="flex flex-col items-center justify-center gap-5">
       <h1 className='text-white font-bold capitalize pt-4 text-5xl text-center'>about component</h1>
       <div className="flex items-center justify-center gap-2">
         <hr className='text-white border-[3px] border-white w-20'/>
         <i className="fa-solid fa-star text-white text-2xl"></i>
         <hr className='text-white border-[3px] border-white w-20'/>
       </div>
       <div className="md:flex-row  flex flex-col items-center w-3/4 gap-3">
        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
       </div>
     </div>
    
   </div>
   
       </>
  )
}
