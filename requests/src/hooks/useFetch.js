import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const httpConfig = (data, method) => {
    if (method.toUpperCase() === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (error) {
        setError("Ocorreu um erro ao capturar os dados!");
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method.toUpperCase() === "POST") {
        let fetchOptions = [url, config];
        const response = await fetch(...fetchOptions);

        const json = await response.json();

        setCallFetch(json);
      }
    };
    httpRequest();
  }, [url, config, method]);

  return { data, isLoading, error, httpConfig };
}
