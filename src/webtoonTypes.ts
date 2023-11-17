export interface IWebtoon {
  id: string;
  title: string;
  thumb: string;
}

// {
//     "title": "역대급 영지 설계사",
//     "about": "소설 속 귀족이 된 토목공학도 김수호. 그런데 뭐? 내 영지가 곧 망할 거라고? 그럼 살려야지. 설계하고, 건설하고, 분양해서. [전 대륙이 기다려온 특별한 기회! 퍼펙트한 교통, 최상의 학군, 쾌적한 숲세권, 원스톱 프리미엄 영지 라이프의 프론테라 남작령이 여러분을 기다립니다. 선착순 분양계약중!]",
//     "genre": "스토리, 판타지",
//     "age": "전체연령가",
//     "thumb": "https://shared-comic.pstatic.net/thumb/webtoon/777767/thumbnail/thumbnail_IMAG06_43be643d-73fc-49a0-a06d-7c184340fc7a.jpg"
//   }

export interface IWebtoonDetail {
  title: string;
  about: string;
  genre: string;
  age: string;
  thumb: string;
}
// {
//   "thumb": "https://image-comic.pstatic.net/webtoon/790713/177/thumbnail_202x120_a4833078-ac3a-4bef-8eec-adbce0530e98.jpg",
//   "id": "177",
//   "title": "176화-저널",
//   "rating": "9.98",
//   "date": "23.11.16"
// },
export interface IEpisode {
  title: string;
  id: string;
  thumb: string;
  rating: string;
  date: string;
}
