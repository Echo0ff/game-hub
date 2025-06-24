import { useEffect, useState } from "react";
import apiClient from "../services/apiclient";

const useGameList = () => {
    const [gameList, setGameList] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setIsLoading(true);
      apiClient
        .get(`/games`)
        .then((res) => {
          setGameList(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, []);
  
    return { gameList, error, isLoading };
}

export default useGameList;