import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";

function App() {
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
      <GridItem area="aside" bg="thistle" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>
      <GridItem area="main" overflow="auto" shadow="sm" p={2}>
        <GameList />
      </GridItem>
    </Grid>
  );
}

export default App;
