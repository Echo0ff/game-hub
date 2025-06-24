import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <Spinner />}
      <List.Root>
        {genres.map((genre) => (
          <ListItem key={genre.id}>
            <HStack marginLeft="10px">
              <Image
                src={genre.image_background}
                alt={genre.name}
                boxSize="32px"
                borderRadius="8px"
              />
              <Button
                fontSize="lg"
                variant="ghost"
                textAlign="left"
                whiteSpace="normal"
                onClick={() => {
                  onSelectGenre(genre);
                  console.log(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
