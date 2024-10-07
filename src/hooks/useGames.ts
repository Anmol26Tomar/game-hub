import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
    id:number;
    name:string;
    slug:string; 
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms: {platform:Platform}[]
    metacritic:number;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  

const useGames = () =>{
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);
  const [loading, setLoading]=useState(false);
  const controller= new AbortController();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games",{signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setError([]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setGames([]);
        setLoading(false);
      });
      /* return ()=>controller.abort(); */ /* Giving some */
    },[]);
    return {games, error, loading}
}
export default useGames;