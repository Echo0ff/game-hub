import useData from "./useData";
import { staticGenres } from "../services/staticgenres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  // const { data: genres, error, isLoading } = useData<Genre>("/genres");
  return { genres: staticGenres, error: null, isLoading: false };
};

export default useGenres;