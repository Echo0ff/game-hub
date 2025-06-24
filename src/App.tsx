import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}
    templateColumns={{
      base: "1fr",
      lg: "200px 1fr",
    }}
    templateRows={{
      base: "60px 1fr",
      lg: "60px 1fr",
    }}
    h="100vh"
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList onSelectGenre={(genre: Genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem area="main" overflow="auto" shadow="sm" p={2}>
        <GameList selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
