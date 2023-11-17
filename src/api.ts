import { IEpisode, IWebtoon, IWebtoonDetail } from "./webtoonTypes";

//webtoon 투데이 목록
export const fetchWebtoons = async () => {
  const response = await fetch(
    "https://webtoon-crawler.nomadcoders.workers.dev/today"
  );
  const data: IWebtoon[] = await response.json();
  return data;
};

//웹툰 투데이 목록에서 id를 이용해 특정 데이터 뽑아쓰기
export const fetchWebtoonById = async (id: string) => {
  const url = "https://webtoon-crawler.nomadcoders.workers.dev/today";
  const response = await fetch(url);
  const data: IWebtoon[] = await response.json();
  const webtoon = data.find((webtoon) => webtoon.id === id);
  return webtoon;
};

//웹툰 id 목록
export const fetchWebtoonDetail = async (id: string) => {
  const url = "https://webtoon-crawler.nomadcoders.workers.dev/";
  const response = await fetch(`${url}/${id}`);
  const data: IWebtoonDetail = await response.json();
  return data;
};

//에피소드 불러오기
export const fetchEpisode = async (id: string) => {
  const url = "https://webtoon-crawler.nomadcoders.workers.dev/";
  const response = await fetch(`${url}/${id}/episodes`);
  const data: IEpisode[] = await response.json();
  return data;
};
