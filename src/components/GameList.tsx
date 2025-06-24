import { Spinner, Grid } from "@chakra-ui/react";
import useGameList, { type Game } from "../hooks/useGameList";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

const GameList = () => {
  const { gameList, error, isLoading } = useGameList();
  const templateColumns = {
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  };

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading ? (
        <Grid templateColumns={templateColumns} gap={4}>
          {Array.from({ length: 12 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </Grid>
      ) : (
        <Grid templateColumns={templateColumns} gap={4}>
          {gameList.map((game: Game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default GameList;
