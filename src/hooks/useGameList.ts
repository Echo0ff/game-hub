import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  platforms: Platform[];
}

export interface Platform {
  platform: {
    id: number;
    slug: string;
    name: string;
  };
}

export interface GameListProps {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const useGameList = () => {
  const { data: gameList, error, isLoading } = useData<Game>("/games");
  return { gameList, error, isLoading };
};

export default useGameList;
