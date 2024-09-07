// import { All_MOVIE, MovieApi } from "../types/moviesType";
// import axios from "axios";

// export const getAllMovie = () => {
//   return async (dispatch) => {
//     const res = await axios.get(MovieApi);
//     dispatch({
//       type: All_MOVIE,
//       data: res.data.results,
//       pages: res.data.total_pages,
//     });
//   };
// };

// export const getMovieSearch = (word) => {
//   return async (dispatch) => {
//     const res = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&query=${word}&language=ar`
//     );
//     dispatch({
//       type: All_MOVIE,
//       data: res.data.results,
//       pages: res.data.total_pages,
//     });
//   };
// };

// export const getPage = (page) => {
//   return async (dispatch) => {
//     const res = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page=${page}`
//     );
//     dispatch({
//       type: All_MOVIE,
//       data: res.data.results,
//       pages: res.data.total_pages,
//     });
//   };
// };

// // export { getAllMovie, getMovieSearch };

// movieAction.js

import axios from "axios";
import { All_MOVIE, MovieApi } from "../types/moviesType";

const fetchData = async (url) => {
  const res = await axios.get(url);
  return {
    type: All_MOVIE,
    data: res.data.results,
    pages: res.data.total_pages,
  };
};

export const getAllMovie = () => async (dispatch) => {
  const data = await fetchData(MovieApi);
  dispatch(data);
};

export const getMovieSearch = (word) => async (dispatch) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&query=${word}&language=ar`;
  const data = await fetchData(url);
  dispatch(data);
};

export const getPage = (page) => async (dispatch) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=355f3cc55c1a5f8fb6f7b79d7541faea&language=ar&page=${page}`;
  const data = await fetchData(url);
  dispatch(data);
};
