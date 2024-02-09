import { useEffect, useState } from "react";
import { genresResult } from "../types/genresResult";

export const useFetch = (url: string, page?: number) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<genresResult | any>(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  const urlData = `${url}?api_key=${apiKey}`;

  useEffect(() => {
    callEndpoint(urlData);
  }, [urlData]);

  const getData = (page: number) => {
    const pageNumber = page ? `page=${page}&` : "";
    const urlData = `${url}?${pageNumber}api_key=${apiKey}`;
    return callEndpoint(urlData);
  };

  const callEndpoint = async (url: string) => {
    try {
      const response: Response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        // eslint-disable-next-line no-throw-literal
        throw "No data";
      }

      const getData = await response.json();

      if (getData) {
        setData(getData);
      }

      setLoading(false);
      return getData;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    getData,
  };
};
