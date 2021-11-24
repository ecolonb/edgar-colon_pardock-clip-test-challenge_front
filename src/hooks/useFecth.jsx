import { useState, useEffect } from "react";

const baseUrl = process.env.REACT_APP_API_URL;

export default function useFetch(endPoint, method, withToken = true) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  const headers = {
    "Content-Type": "application/json"
  };

  const token = sessionStorage.getItem("token");
  if (withToken) headers.Authorization = `Bearer ${token}`;

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await window.fetch(baseUrl.concat("/", endPoint), {
          method: method,
          headers: headers
        });
        const data = await response.json();
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError({ ok: false, error });
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endPoint]);

  return { isLoading, apiData, serverError };
}
