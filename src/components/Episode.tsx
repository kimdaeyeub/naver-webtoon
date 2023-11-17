import React from "react";
import { IEpisode } from "../webtoonTypes";

const Episode = ({ thumb, title, rating, date }: IEpisode) => {
  return (
    <div className="flex flex-col w-full h-full p-4 border rounded-lg">
      <img src={thumb} className="mb-4" />
      <div
        className="flex justify-between
      items-start"
      >
        <div className="flex flex-col items-start justify-center">
          <span className="text-md font-medium text-slate-600">{title}</span>
          <span className="text-sm font-normal text-slate-400">{date}</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <svg
            className="text-yellow-300"
            width={20}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            ></path>
          </svg>
          <span className="text-sm font-normal text-slate-400">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Episode;
