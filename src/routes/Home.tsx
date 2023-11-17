import { useQuery } from "react-query";
import { fetchWebtoons } from "../api";
import Webtoon from "../components/Webtoon";

const Home = () => {
  const { data, isLoading } = useQuery("webtoons", fetchWebtoons);
  if (isLoading)
    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Loading...</h1>
      </div>
    );
  return (
    // 홈페이지 전체를 감싸는 div
    <div className="flex flex-col justify-center items-start">
      {/* 홈페이지의 상단 부분 */}
      <div className="w-full flex justify-between items-center border-b lg:px-32 md:px-16 sm:px-12 px-4 py-3">
        <div className="flex justify-center items-end space-x-3">
          <h1 className="text-3xl font-semibold text-slate-700 mr-4">
            오늘의 웹툰
          </h1>
          <h1 className="text-lg font-semibold text-gray-400 hidden md:flex">
            인기순
          </h1>
          <h1 className="text-lg font-semibold text-gray-400 hidden md:flex">
            업데이트순
          </h1>
          <h1 className="text-lg font-semibold text-green-600 hidden md:flex">
            조회순
          </h1>
          <h1 className="text-lg font-semibold text-gray-400 hidden md:flex">
            별점순
          </h1>
        </div>
        <button className="bg-green-400 px-3 py-2 text-white uppercase text-sm  rounded-md">
          creator's
        </button>
      </div>
      {/* 웹툰 그리드 */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 mt-6 lg:px-32 md:px-16 sm:px-12 px-4 py-6">
        {data?.map((webtoon) => (
          <Webtoon {...webtoon} key={webtoon.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
