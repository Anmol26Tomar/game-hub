import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
//import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image}></Image>
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize="3xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
