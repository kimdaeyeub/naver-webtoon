import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-full bg-green-500 px-32 py-5 flex justify-between items-center">
      <h1 className="text-white font-semibold text-4xl">Webtoon</h1>
      <div className="relative">
        <input
          placeholder="제목/작가로 검색할 수 있습니다."
          className="bg-white outline-none border px-3 py-1 rounded-md w-64"
        />
        <svg
          width={20}
          className="text-gray-400 absolute right-2 top-0 bottom-0 m-auto"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
