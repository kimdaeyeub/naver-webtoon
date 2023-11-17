import { useQuery } from "react-query";
import { fetchWebtoonDetail } from "../api";
import { Params, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams<Params<string>>();
  const { data, isLoading } = useQuery(["detail", id], () =>
    fetchWebtoonDetail(id!)
  );
  return <>{isLoading ? <div>Loading...</div> : <div>{data!.title}</div>}</>;
};

export default Detail;
