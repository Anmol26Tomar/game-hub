import useGenres from "../hooks/useGenres";
import { HStack, List, Image, ListItem, Text, Spinner } from "@chakra-ui/react";
const GenreList = () => {
  const { data, loading, error } = useGenres();
  if(loading) return <Spinner/>
  if(error) return null;
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
4333;
