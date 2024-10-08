import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  Image,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
interface Props {
   onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({onSelectGenre}: Props) => {
  const { data, loading, error } = useGenres();
  if (loading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem py={1} key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
