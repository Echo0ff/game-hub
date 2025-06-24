import { useEffect, useState } from "react";
import apiClient from "../services/apiclient";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface Response<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps: any[] = []) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {

    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<Response<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [...deps]);

  return { data, error, isLoading };
};

export default useData;
