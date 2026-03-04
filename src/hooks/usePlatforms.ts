import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";
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
