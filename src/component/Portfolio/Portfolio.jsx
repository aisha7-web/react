import React, { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  // فتح المودال وتعيين الصورة
  const handleImageClick = (image) => {
    setSelectedImage(image); // تعيين الصورة المحددة
  };

  // إغلاق المودال
  const handleCloseModal = () => {
    setSelectedImage(null); // إخفاء المودال
  };

  return (
    <>
      <div className="flex-col justify-center items-center p-8 mt-5 gap-7 w-[90%] mx-auto">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-[#2C3E50] font-bold capitalize pt-4 text-4xl text-center">
            PORTFOLIO COMPONENT
          </h1>
          <div className="flex items-center justify-center gap-2">
            <hr className="text-[#2C3E50] border-[3px] border-[#2C3E50] w-20" />
            <i className="fa-solid fa-star text-[#2C3E50] text-2xl"></i>
            <hr className="text-[#2C3E50] border-[3px] border-[#2C3E50] w-20" />
          </div>
        </div>

        <div className="flex-col items-center gap-10">
          {/* أول صف من الصور */}
          <div className="flex md:flex-row flex-col items-center justify-between gap-7 mt-5">
            <div className="md:w-1/3 w-full relative group hover:bg-[#1ABC9C] duration-300">
              <img
                src={img1}
                alt="Portfolio 1"
                className="rounded-md w-full cursor-pointer group-hover:opacity-20 " // الصورة تصبح أقل وضوحًا عند التمرير
                onClick={() => handleImageClick(img1)} // عند الضغط على الصورة
              />
            </div>

            <div className="md:w-1/3 w-full relative group hover:bg-[#1ABC9C] duration-300">
              <img
                src={img2}
                alt="Portfolio 1"
                className="rounded-md w-full cursor-pointer group-hover:opacity-20 " // الصورة تصبح أقل وضوحًا عند التمرير
                onClick={() => handleImageClick(img2)} // عند الضغط على الصورة
              />
            </div>

            <div className="md:w-1/3 w-full relative group hover:bg-[#1ABC9C] duration-300">
              <img
                src={img3}
                alt="Portfolio 1"
                className="rounded-md w-full cursor-pointer group-hover:opacity-20 " // الصورة تصبح أقل وضوحًا عند التمرير
                onClick={() => handleImageClick(img3)} // عند الضغط على الصورة
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center justify-between gap-7 mt-5">
            <div className="md:w-1/3 w-full relative group hover:bg-[#1ABC9C] duration-300">
              <img
                src={img1}
                alt="Portfolio 1"
                className="rounded-md w-full cursor-pointer group-hover:opacity-20 " 
                onClick={() => handleImageClick(img1)} // عند الضغط على الصورة
              />
            </div>

            <div className="md:w-1/3 w-full relative group hover:bg-[#1ABC9C] duration-300 ">
              <img
                src={img2}
                alt="Portfolio 1"
                className="rounded-md w-full cursor-pointer group-hover:opacity-20 " 
                onClick={() => handleImageClick(img2)} // عند الضغط على الصورة
              />
             
            </div>
            <div className="md:w-1/3 w-full relative group hover:bg-[#1ABC9C] duration-300">
              <img
                src={img3}
                alt="Portfolio 1"
                className="rounded-md w-full cursor-pointer group-hover:opacity-20 " 
                onClick={() => handleImageClick(img3)} // عند الضغط على الصورة
              />
            </div>
          </div>
        </div>

        {/* المودال إذا كانت الصورة تم تحديدها */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative p-4 rounded-md w-3/4 md:w-1/2">
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-full"
              />
              <button
                onClick={handleCloseModal} // إغلاق المودال
                className="absolute top-0 right-0 p-4 text-white bg-red-500 rounded-full"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
