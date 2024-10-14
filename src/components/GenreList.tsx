import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  Image,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
interface Props {
   onSelectGenre: (genre: Genre) => void;
   selectedGenre: Genre | null;
}
const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const { data, loading, error } = useGenres();
  if (loading) return <Spinner />;
  if (error) return null;
  return (
    <>
    <Heading
    fontSize="2xl"
    marginBottom={3}
    >
      Genres
    </Heading>
    <List>
      {data.map((genre) => (
        <ListItem py={1} key={genre.id}>
          <HStack>
            <Image
              objectFit="cover"
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id===selectedGenre?.id?"bold":"normal"}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};
export default GenreList;
