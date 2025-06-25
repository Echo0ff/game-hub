import { Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import SelectPlateform from "./components/SelectPlateform";
import type { FilterPlatform } from "./hooks/usePlatform";
import SortGameList from "./components/SortGameList";

interface GameQuery {
  genre: Genre | null;
  platform: FilterPlatform | null;
  ordering: string | null;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    ordering: null, // name, released, added, created, updated, rating, metacritic. You can reverse the sort order adding a hyphen, for example: -released.
  });
  
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
        <GenreList onSelectGenre={(genre: Genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
      <GridItem area="main" overflow="auto" shadow="sm" p={2}>
        <HStack alignItems="center">
          <SelectPlateform onSelectPlatform={(platform: FilterPlatform) => setGameQuery({ ...gameQuery, platform })} />
          <SortGameList onSelectOrdering={(ordering: string) => setGameQuery({ ...gameQuery, ordering })} />
        </HStack>
        <GameList gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
