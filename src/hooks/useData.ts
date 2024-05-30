import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

function useDAta<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [endpoint]);
  return { data, error, isLoading };
}

export default useDAta;