import React from "react";
import { ProjectInterface } from "../interface";


function Project({ title, description, imageUrl, repoLink, index }: ProjectInterface) {
    if (index % 2 === 0)
        return (
            <div className="grid grid-cols-2 max-w-[800px] justify-center items-center mx-auto mb-32">
                <div>
                    <h1 className="justify-center text-center text-4xl">{title}</h1>
                    <p className="text-center text-[#1e152a]">{description}</p>
                    <div className="text-center mt-2">
                        <a href={repoLink} target="_blank" rel="noreferrer" className="font-bold text-white text-xs bg-[#1e152a] p-2 rounded-1xl border border-white border-2 hover:border-black hover:bg-gray-200 hover:text-black ">VIEW ON GITHUB</a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {imageUrl}
                </div>
            </div>
        );
    else
        return (
            <div className="grid grid-cols-2 max-w-[800px] justify-center items-center mx-auto mb-32">
                <div className="flex items-center justify-center">
                    {imageUrl}
                </div>
                <div>
                    <h1 className="justify-center text-center text-4xl">{title}</h1>
                    <p className="text-center text-[#1e152a]">{description}</p>
                    <div className="text-center mt-2">
                        <a href={repoLink} target="_blank" rel="noreferrer" className="font-bold text-white text-xs bg-[#1e152a] p-2 rounded-1xl border border-white border-2 hover:border-black hover:bg-gray-200 hover:text-black ">VIEW ON GITHUB</a>
                    </div>
                </div>

            </div>
        );
}

export default Project;