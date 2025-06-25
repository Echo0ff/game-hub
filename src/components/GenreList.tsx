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
import { useState } from "react";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { genres, error, isLoading } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  
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
                  onSelectGenre(genre)
                  setSelectedGenre(genre)
                }}
                fontWeight={selectedGenre === genre ? "bold" : "normal"}
                color={selectedGenre === genre ? "green.400" : ""}
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
