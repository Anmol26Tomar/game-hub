import Genre from "./Genre";
import Platform from "./Platform";
export default interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  rating_top: number;
  description_raw: string;
  parent_platforms: { platform: Platform; }[];
  genres:Genre[];
  publishers:Platform[];
}
