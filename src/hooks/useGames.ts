import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image:string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  

const useGames = () =>{
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);
  const controller= new AbortController();

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games",{signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setError([]);
      })
      .catch((err) => {
        setError(err.message);
        setGames([]);
      });
      /* return ()=>controller.abort(); */ /* Giving some */
    },[]);
    return {games, error}
}
export default useGames;