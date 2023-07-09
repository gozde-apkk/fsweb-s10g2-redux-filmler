export const DELETE_MOVIE = "DELETE_MOVIE";
export const INITIAL_MOVIES = "INITIAL_MOVIES"
export const  ADD_MOVIE = " ADD_MOVIE";

export const deleteMovie = (id) => {
  return ({ type: DELETE_MOVIE, payload: id });
}

export const loadInitialMovies = () => {
  return { type: INITIAL_MOVIES };
};

export const addMovie = (movie) => {
  return { type: ADD_MOVIE, payload: movie };
};
