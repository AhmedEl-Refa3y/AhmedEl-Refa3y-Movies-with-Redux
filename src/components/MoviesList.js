import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import CardMovies from "./MoviesCard";
import PaginationExample from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "../redux/actions/movieAction";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3 d-flex justify-content-center">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovies key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className=" text-center p-5" style={{ color: "white" }}>
          لا يوجد افلام....
        </h2>
      )}
      {movies.length >= 1 ? <PaginationExample /> : null}
    </Row>
  );
};

export default MoviesList;
