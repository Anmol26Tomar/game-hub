import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    name:string;
    id:number;
  }
  
  interface FetchGenresResponse {
    count: number;
    results: Genre[];
  }
  
const useGenres = () =>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState([]);
    const [loading, setLoading]=useState(false);
    const controller= new AbortController();
  
    useEffect(() => {
      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres",{signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results);
          setError([]);
          setLoading(false);
        })
        .catch((err) => {
         if(err instanceof CanceledError) return;
          setLoading(false);
        });
         return ()=>controller.abort(); 
      },[]);
      return {genres, error, loading}
  }
  export default useGenres;