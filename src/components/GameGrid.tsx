import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCards from "./GameCards";
import { CardSkeleton } from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>  */}
      <SimpleGrid
        columns={{ 
         sm: 1,
         md: 2,
         lg: 3,
         xl: 4 }}
         padding={10} 
         spacing={6}>
        {loading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {data.map((d) => (
          <CardContainer key={d.id}>
            <GameCards game={d} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
