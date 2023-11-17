import { IWebtoon, IWebtoonDetail } from "./webtoonTypes";

export const fetchWebtoons = async () => {
  const response = await fetch(
    "https://webtoon-crawler.nomadcoders.workers.dev/today"
  );
  const data: IWebtoon[] = await response.json();
  return data;
};

export const fetchWebtoonDetail = async (id: string) => {
  const url = "https://webtoon-crawler.nomadcoders.workers.dev/";
  const response = await fetch(`${url}/${id}`);
  const data: IWebtoonDetail = await response.json();
  return data;
};
