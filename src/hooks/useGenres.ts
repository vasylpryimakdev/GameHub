import { useQuery } from "@tanstack/react-query";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
import APIClient from "../services/api-client";
import genres from "../data/genres";
import { OneDay } from "../constants";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: OneDay,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
