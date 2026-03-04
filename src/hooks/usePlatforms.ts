import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { Platform } from "./useGames";
import { FetchResponse } from "./useData";
import { OneDay } from "../constants";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("platforms")
        .then((res) => res.data.results),
    staleTime: OneDay,
    initialData: platforms,
  });

export default usePlatforms;
