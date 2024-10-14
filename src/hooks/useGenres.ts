import genres from "../data/genres";
export interface Genre {
    name:string;
    id:number;
    image_background: string;
  }
const useGenres = () => ({data:genres, loading:false, error:null})
export default useGenres;