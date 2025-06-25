import useData from "./useData";
import type { Genre } from "./useGenres";
import type { FilterPlatform } from "./usePlatform";

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

const useGameList = (selectedGenre: Genre | null, selectedPlatform: FilterPlatform | null, ordering: string | null, search: string | null) => {
  const { data: gameList, error, isLoading } = useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id, ordering: ordering, search: search }},
    [selectedGenre?.id, selectedPlatform?.id, ordering, search]
  );
  return { gameList, error, isLoading, selectedGenre };
};

export default useGameList;
