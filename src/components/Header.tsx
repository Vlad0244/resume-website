import React from "react";
function Header() {
  return (
    <>
      <div className="grid grid-rows-2 text-center">
        <div className="flex items-center justify-center">
          <span className="font-['Roboto'] font-bold text-white bg-blue-500 p-2 rounded-md shadow-md text-4xl">
            Vlad Suprun
          </span>
        </div>
        <div>
          <div className="">
              <span className="font-['Roboto'] font-bold text-white bg-blue-500 p-2.5 rounded-md shadow-md">Software Development Student</span>
          </div>
          <button className="font-bold text-white text-xs text-gray-900 bg-red-700 p-2 rounded-full border border-black hover:bg-red-300 hover:text-black mt-2">
            VIEW RESUME
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
