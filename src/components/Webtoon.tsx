import { useNavigate } from "react-router-dom";
import { IWebtoon } from "../webtoonTypes";

const Webtoon = ({ title, thumb, id }: IWebtoon) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/${id}`);
  };
  return (
    <div
      onClick={onClick}
      className="h-full w-full p-4 border flex flex-col rounded-lg"
      key={id}
    >
      <img src={thumb} className="object-cover mb-4" />
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-center items-start">
          <span className="text-lg text-gray-700 font-semibold">{title}</span>
          <span className="text-gray-400">#스토리, #판타지</span>
        </div>

        <div className="flex justify-center items-center space-x-2">
          <span>4.5</span>
          <svg
            width={20}
            className="text-yellow-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Webtoon;
