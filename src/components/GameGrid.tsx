import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import { CardSkeleton } from "./CardSkeleton";
const GameGrid = () => {
  const {games, error, loading} = useGames();
  const skeletons=[1,2,3,4,5,6,7,8];
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>  */}
      <SimpleGrid columns={{sm:1, md:2, lg:4}} padding={10} spacing={10}>
      {loading && skeletons.map(skeleton=><CardSkeleton key={skeleton}/>) }
       {games.map((game)=>(
        <GameCards game={game} key={game.id}/>
       ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
