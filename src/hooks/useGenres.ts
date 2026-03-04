import { useQuery } from "@tanstack/react-query";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("genres")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
