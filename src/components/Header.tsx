import React from "react";

import resumePdf from "../media/ResumeSummer.pdf";
function Header() {
  return (
    <>
      <div className="grid grid-rows-2 text-center">
        <div className="flex items-center justify-center">
          <span className="font-['Roboto'] font-bold text-[#1e152a] text-8xl mb-3 bg-[#f7dd72] p-2 rounded-md shadow-md ">
            Vlad Suprun
          </span>
        </div>
        <div>
          <div className="mb-3.5">
              <span className="font-['Roboto'] font-bold text-[#1e152a] bg-[#f7dd72] p-2 rounded-md shadow-md ">Software Development Student</span>
          </div>
          <a href={resumePdf} target="_blank" className="font-bold text-white text-xs bg-[#1e152a] p-2 rounded-1xl border border-white border-2 hover:border-black hover:bg-gray-200 hover:text-black">
            VIEW RESUME
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
