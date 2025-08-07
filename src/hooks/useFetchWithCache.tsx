"use Client";
import { error } from "console";

const cache = new Map(); //to store cache
const inProgress = new Map(); //to store in progress requests

export default async function useFetchWithCache(
  url: URL,
  options: RequestInit
) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url));
  }

  if (inProgress.has(url)) {
    return inProgress.get(url);
  }
  const fetchData = async (url: URL, options: RequestInit) => {
    try {
      const response = await fetch(url, options);
      if (!response) {
        throw new Error("Fetch request failed", { cause: error });
      }
      const data = response.json();
      cache.set(url, data);
      return data;
    } catch (error) {
      console.error("Fetch Error: ", error);
    } finally {
      inProgress.delete(url);
    }
  };
  inProgress.set(url, fetchData);
  return fetchData(url, options);
}
