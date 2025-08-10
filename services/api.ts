import { Movies } from "@/types/movie";
import axios from "axios";

const BASE_URL = "https://imdb236.p.rapidapi.com/api/imdb/top250-movies";

const getOptions = (url: string = BASE_URL) => ({
  method: "GET",
  url,
  headers: {
    "x-rapidapi-key": process.env.EXPO_PUBLIC_RAPID_API_KEY!,
    "x-rapidapi-host": process.env.EXPO_PUBLIC_RAPID_HOST_KEY!,
  },
  timeout: 10000, // 10 seconds
});

export async function fetchMovies(url?: string): Promise<Movies[]> {
  try {
    const response = await axios.request(getOptions(url));
    console.log("response:", response.data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      throw new Error(
        `Failed to fetch movies: ${error.response?.data?.message || error.message}`
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred while fetching movies.");
    }
  }
}
