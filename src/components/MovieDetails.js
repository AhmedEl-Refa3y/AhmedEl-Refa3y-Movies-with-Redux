import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Zoom from "react-reveal/Zoom";

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [partBeforeDecimal, setPartBeforeDecimal] = useState(0);
  const [partAfterDecimal, setPartAfterDecimal] = useState(0);

  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovie(res.data);
    calculateRatingParts(res.data.vote_average);
  };
  const calculateRatingParts = (voteAverage) => {
    const partBeforeDecimal = parseInt(voteAverage);
    const partAfterDecimal = Math.floor((voteAverage % 1) * 10);
    setPartBeforeDecimal(partBeforeDecimal);
    setPartAfterDecimal(partAfterDecimal);
  };

  useEffect(() => {
    getMovieDetails();
  });

  return (
    <div>
      <Zoom>
        <Row className=" justify-content-center MD1 mb-3">
          <Col md="12" xs="12" sm="12" className="m-4">
            <div className="card-detalis d-flex align-items-center">
              <img
                className="img-movie w-30"
                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                alt={movie.title}
                style={{ height: "250px", borderRadius: "10px" }}
              />
              <div className=" justify-content-center text-center mx-auto">
                <p className="card-text-details ">
                  اسم الفيلم : {movie.original_title}
                </p>
                <p className="card-text-details ">
                  تاريخ الانتاج : {movie.release_date}
                </p>
                <p className="card-text-details ">
                  عدد التقييمات : {movie.vote_count}
                </p>
                <p className="card-text-details ">
                  التقييم : {partBeforeDecimal}.{partAfterDecimal}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Zoom>

      <Zoom>
        <Row className=" justify-content-center MD2 mb-3">
          <Col md="12" xs="12" sm="12" className="mt-1">
            <div className="card-story d-flex flex-column align-items-start">
              <div className=" text-end p-4">
                <p className="card-text-title fs-3 fw-bold ">القصة : </p>
              </div>
              <div className="text-end pb-4">
                <p className="card-text-story border-bottom-0 text-center">
                  {movie.overview === "" ? "لا تتوافر الان" : movie.overview}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Zoom>

      <Zoom>
        <Row className=" justify-content-center MD3 p-4">
          <Col
            md="10"
            xs="12"
            sm="12"
            className="mt-2 d-flex justify-content-center"
          >
            <Link to="/">
              <button
                style={{ backgroundColor: "#22254b", border: "none" }}
                className="btn btn-primary mx-2"
              >
                عودة للشاشة الرئيسية
              </button>
            </Link>
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
              <button
                style={{ backgroundColor: "#22254b", border: "none" }}
                className="btn btn-primary mx-2"
              >
                مشاهدة الفيلم
              </button>
            </a>
          </Col>
        </Row>
      </Zoom>
    </div>
  );
};

export default MovieDetails;
