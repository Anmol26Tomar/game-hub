import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";
import { px } from "framer-motion";
const GameGrid = () => {
  const {games, error} = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>  */}
      <SimpleGrid columns={{sm:1, md:2, lg:3}} padding={10} spacing={10}>
       {games.map((game)=>(
        <GameCards game={game} key={game.id}/>
       ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
