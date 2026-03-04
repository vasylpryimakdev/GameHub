import { useQuery } from "@tanstack/react-query";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";
import { OneDay } from "../constants";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("genres")
        .then((res) => res.data.results),
    staleTime: OneDay,
    initialData: genres,
  });

export default useGenres;
