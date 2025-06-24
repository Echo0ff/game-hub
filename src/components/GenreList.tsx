import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
    {error && <Text>{error}</Text>}
    {isLoading && <Spinner />}
    <List.Root>
      {genres.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </List.Root>
    </>
   
  );
};

export default GenreList;