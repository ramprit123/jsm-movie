import axios from "axios";

const options = {
  method: "GET",
  url: "https://imdb236.p.rapidapi.com/api/imdb/top250-movies",
  headers: {
    "x-rapidapi-key": process.env.EXPO_PUBLIC_RAPID_API_KEY!,
    "x-rapidapi-host": process.env.EXPO_PUBLIC_RAPID_HOST_KEY!,
  },
};

export async function fetchMovies() {
  try {
    const response = await axios.request(options);
    return response;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message, error.response?.data);
      throw new Error(
        `Failed to fetch movies: ${error.response?.data?.message || error.message}`
      );
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred while fetching movies.");
    }
  }
}
