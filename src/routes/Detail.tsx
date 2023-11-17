import { useQuery } from "react-query";
import { fetchEpisode, fetchWebtoonById, fetchWebtoonDetail } from "../api";
import { Params, useParams } from "react-router-dom";
import Episode from "../components/Episode";

const Detail = () => {
  const { id } = useParams<Params<string>>();

  //id를 받아서 웹툰의 상세정보를 가져오는 useQuery
  const { data: detail, isLoading: detailIsLoading } = useQuery(
    ["detail", id],
    () => fetchWebtoonDetail(id!)
  );

  //id를 받아서 웹툰의 에피소드를 가져오는 useQuery
  const { data: episodes, isLoading: episodesIsLoading } = useQuery(
    ["episodes", id],
    () => fetchEpisode(id!)
  );

  //genreFormatting 함수는 장르를 받아서 #장르1 #장르2 #장르3 이런식으로 만들어주는 함수입니다.
  const genreFormatting = (genre: string): string[] => {
    return genre.split(",").map((genre) => "#" + genre.trim());
  };
  if (detailIsLoading && episodesIsLoading)
    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">Loading...</h1>
      </div>
    );
  return (
    <div className="w-full h-screen flex flex-col">
      {/* 웹툰 헤드라인 */}
      <div className="flex flex-col lg:flex-row border-b lg:px-32 md:px-16 sm:px-12 px-4 py-4 w-full items-center">
        <img
          className="h-full object-contain lg:mr-10 w-full lg:w-auto"
          src={detail?.thumb}
        />
        <div className="w-full h-full py-10 px-4 flex flex-col justify-center">
          <span className="text-2xl font-semibold mb-4">{detail?.title}</span>
          <span className="text-gray-400">{detail?.about}</span>
          <div className="space-x-2 flex items-center mt-6">
            {genreFormatting(detail!.genre).map((genre) => (
              <div
                key={Math.random()}
                className="bg-slate-200 px-2 py-0.5 rounded-xl"
              >
                <span className="text-slate-500 text-sm">{genre}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <span className="text-slate-500">연령제한: </span>
            <span className="text-slate-500">{detail?.age}</span>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full h-full gap-3 lg:px-32 md:px-16 sm:px-12 px-4 py-10">
        {episodes?.map((episode) => (
          <Episode {...episode} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
