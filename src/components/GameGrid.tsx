import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import { CardSkeleton } from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "../hooks/useGenres";
interface Props{
   selectedGenre: Genre | null
}
const GameGrid = ({selectedGenre}:Props) => {
  const { data, error, loading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>  */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={10} spacing={3}>
        {loading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <CardSkeleton/>
            </CardContainer>
          ))}
        {data.map((d) => (
          <CardContainer  key={d.id}>
            <GameCards game={d}/>
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
