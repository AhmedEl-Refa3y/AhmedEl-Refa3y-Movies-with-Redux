import { All_MOVIE } from "../types/moviesType";

const initalValue = { movies: [], pageCount: 0 };

const moviesReducer = (state = initalValue, action) => {
  switch (action.type) {
    case All_MOVIE:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};

export default moviesReducer;
