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
            <HStack 
              marginLeft="10px" 
              align="flex-start"
              gap="2"
              width="100%"
              alignItems="center"
            >
              <Image
                src={genre.image_background}
                alt={genre.name}
                boxSize="34px"
                borderRadius="8px"
                flexShrink={0}
              />
              <Button
                fontSize="lg"
                variant="ghost"
                onClick={() => {
                  onSelectGenre(genre)
                  setSelectedGenre(genre)
                }}
                fontWeight={selectedGenre === genre ? "bold" : "normal"}
                color={selectedGenre === genre ? "green.400" : ""}
                flex="1"
                height="auto"
                minHeight="40px"
                paddingY="2"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Text
                  textAlign="left"
                  whiteSpace="normal"
                  wordBreak="break-word"
                  width="100%"
                  lineHeight="1.2"
                >
                  {genre.name}
                </Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
