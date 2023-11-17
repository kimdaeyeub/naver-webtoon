import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { fetchWebtoons } from "../api";
import { IWebtoon } from "../webtoonTypes";

const Navbar = () => {
  const { data } = useQuery("webtoons", fetchWebtoons);

  const navigate = useNavigate();
  const onMoveHome = () => {
    navigate("/");
  };
  const [search, setSearch] = useState<IWebtoon[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    const searchTerm = e.target.value;
    if (searchTerm === "") return setSearch([]);
    const filteredWebtoons = data?.filter((webtoon: IWebtoon) =>
      webtoon.title.includes(searchTerm)
    );
    if (filteredWebtoons?.length === 0) {
      return setSearch([]);
    } else {
      setSearch(filteredWebtoons!);
    }
  };
  const onClick = (id: string) => {
    navigate(`/${id}`);
    setSearchText("");
  };
  return (
    <div className="w-full h-full bg-green-500 lg:px-32 md:px-16 sm:px-12 px-4 py-5 flex justify-between items-center">
      <h1
        onClick={onMoveHome}
        className="cursor-pointer text-white font-semibold text-4xl"
      >
        Webtoon
      </h1>
      <div className="flex space-x-3 justify-center items-center">
        <div className="relative">
          {searchText !== "" && (
            <div className="bg-white rounded-b-lg shadow-md w-full absolute top-full px-2 py-4 flex flex-col">
              {search.map((result) => (
                <span
                  onClick={() => onClick(result.id)}
                  key={result.id}
                  className="px-2 py-3 border-b cursor-pointer"
                >
                  {result.title}
                </span>
              ))}
            </div>
          )}

          <input
            value={searchText}
            onChange={handleSearch}
            placeholder="제목으로 검색할 수 있습니다."
            className="bg-white outline-none border px-3 rounded-sm py-1 w-64 text-sm"
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
        <button className="px-2 py-1 bg-white text-sm font-normal rounded-sm text-slate-700 hidden md:flex">
          로그인
        </button>
        <svg
          className="hidden md:flex"
          width={30}
          fill="none "
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
