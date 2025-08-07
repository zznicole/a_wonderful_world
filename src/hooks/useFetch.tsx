"use Client";

import error from "next/error";

export default async function useFetch(url: string) {
  try {
    const response = await fetch(url);
    if (!response) {
      throw new Error("Fetch request failed", { cause: error });
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error: ", error);
  }
}
