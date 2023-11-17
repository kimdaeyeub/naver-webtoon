import { useQuery } from "react-query";
import { fetchWebtoons } from "../api";
import Webtoon from "../components/Webtoon";

const Home = () => {
  const { data, isLoading, error } = useQuery("webtoons", fetchWebtoons);
  if (isLoading) return <div>Loading...</div>;
  if (error) return "An error has occurred: " + error;
  return (
    // 홈페이지 전체를 감싸는 div
    <div className="flex flex-col justify-center items-start">
      {/* 홈페이지의 상단 부분 */}
      <div className="w-full flex justify-between items-center border-b border-t px-32 mt-12 py-3">
        <div className="flex justify-center items-end space-x-3">
          <h1 className="text-3xl font-bold mr-4">오늘의 웹툰</h1>
          <h1 className="text-lg font-semibold text-gray-400">인기순</h1>
          <h1 className="text-lg font-semibold text-gray-400">업데이트순</h1>
          <h1 className="text-lg font-semibold text-green-600">조회순</h1>
          <h1 className="text-lg font-semibold text-gray-400">별점순</h1>
        </div>
        <button className="bg-green-400 px-3 py-2 text-white uppercase text-sm  rounded-md">
          creator's
        </button>
      </div>
      {/* 웹툰 그리드 */}
      <div className="grid grid-cols-5 gap-2 mt-10 px-32 py-6">
        {data?.map((webtoon) => (
          <Webtoon {...webtoon} key={webtoon.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
