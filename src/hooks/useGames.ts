import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenres";
import apiClient from "../services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey:["games", gameQuery],
    queryFn: ()=> 
      apiClient.get<FetchResponse<Game>>("/games",{
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        },
      })
      .then(   )
  })
  useData<Game>(
    "/games",
    {
     
    },
    [gameQuery]
  );
export default useGames;