import {Component, ReactElement, ReactNode} from "react";

export interface ProjectInterface {
    title: string;
    description: string;
    imageUrl: ReactNode;
    repoLink: string;
    index: number;
}