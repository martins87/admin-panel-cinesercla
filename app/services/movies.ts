import { Movie } from "@/app/types/movie";

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("/api/movies/", {
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
    const response = await fetch("/api/movies/", {
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

export const editMovie = async (movie: Movie): Promise<Movie | null> => {
  try {
    const response = await fetch(`/api/movies/${movie.tmdbId}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(movie),
    });

    if (!response.ok) {
      throw new Error(`Failed to edit movie. Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log("Error editing movie", error);

    return null;
  }
};

export const deleteMovie = async (id: string): Promise<boolean> => {
  try {
    const response = await fetch(`/api/movies/${id}`, {
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
