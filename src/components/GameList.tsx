import { Spinner } from "@chakra-ui/react";
import useGameList from "../hooks/useGameList";

interface Game {
  id: number;
  name: string;
  metacritic: number;
  platforms: Platform[];
}

interface Platform {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
}

interface GameListProps {
  gameList: Game[];
}

const GameList = () => {
  const { gameList, error, isLoading } = useGameList();

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading ? (
        <Spinner />
      ) : (
        gameList.map((game: Game) => <div key={game.id}>{game.name}</div>)
      )}
    </>
  );
};

export default GameList;
