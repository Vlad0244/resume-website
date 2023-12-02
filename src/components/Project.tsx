import React from "react";
import { ProjectInterface } from "../interface";

function Project({ title, description, imageUrl }: ProjectInterface) {
    return (
        <div className="grid grid-cols-2 max-w-[1000px] justify-center items-center mx-auto">
            <div>
                <h1 className="justify-center text-center text-4xl">{title}</h1>
                <p className="text-center text-[#1e152a]">{description}</p>
            </div>

            <div className="flex items-center justify-center">
                <img className="max-w-full sm:h-96" src={imageUrl} alt="Project Image" />
            </div>
        </div>
    );
}

export default Project;