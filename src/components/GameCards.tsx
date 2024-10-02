import { Card, CardHeader, CardBody, CardFooter, Text, Image } from "@chakra-ui/react";
import {Game} from "../hooks/useGames";

interface Props {
    game: Game;
}

const GameCards = ({game}:Props) => {
  return <Card borderRadius={10} overflow={"hidden"}>
   <Image src={game.background_image}></Image> 
   <Text fontSize='3xl'>{game.name}</Text>
  </Card>;
};

export default GameCards;