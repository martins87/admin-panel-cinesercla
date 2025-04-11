import { Movie } from "@/app/types/movie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("Missing API_BASE_URL in environment variables.");
}

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/movies/`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch movie list. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error retrieving movie list", error);

    return [];
  }
};

export const createMovie = async (
  movie: Omit<Movie, "_id">
): Promise<Movie | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/movies/`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(movie),
    });

    if (!response.ok) {
      throw new Error(`Failed to create movie. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error creating movie", error);

    return null;
  }
};

export const deleteMovie = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/movies/${id}`, {
      method: "DELETE",
    });

    if (response.status !== 200) {
      throw new Error(`Failed to delete movie. Status: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.log("Error deleting movie", error);
    return false;
  }
};
