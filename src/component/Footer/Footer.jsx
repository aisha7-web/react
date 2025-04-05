import React from "react";

export default function Footer() {
  return (
    <footer className=" bottom-0 left-0 right-0 w-full bg-[#2C3E50]  border-gray-300">
      <div className="container px-4 py-20 ">
        <div className="flex flex-col md:flex-row justify-evenly text-center gap-10 md:gap-4 ">
          {/* Location */}
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-3xl font-semibold">LOCATION</h1>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          {/* Around the Web */}
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-3xl font-semibold">AROUND THE WEB</h1>
            <div className="flex items-center justify-center gap-4 text-xl">
              <div className="flex rounded-full justify-center items-center border-2 border-white w-10 h-10">
                <a href="#" className="hover:text-gray-300">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
              <div className="flex rounded-full justify-center items-center border-2 border-white w-10 h-10">
                <a href="#" className="hover:text-gray-300">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="flex rounded-full justify-center items-center border-2 border-white w-10 h-10">
                <a href="#" className="hover:text-gray-300">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="flex rounded-full justify-center items-center border-2 border-white w-10 h-10">
                <a href="#" className="hover:text-gray-300">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>
          </div>

          {/* About Freelancer */}
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-3xl font-semibold">ABOUT FREELANCER</h1>
            <p>
              Freelance is a free to use, licensed Bootstrap theme <br />
              created by Route
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1A252F] py-4 p-10">
        <span className="block text-sm text-white text-center p-5">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Copyright ™
          </a>{" "}
          . Your Website 2021.
        </span>
      </div>
    </footer>
  );
}
