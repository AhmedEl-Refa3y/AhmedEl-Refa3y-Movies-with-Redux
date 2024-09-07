import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

const MoviesCard = ({ mov }) => {
  const voteAverage = mov.vote_average;
  const partBeforeDecimal = parseInt(voteAverage); // الجزء القبل العلامة
  const partAfterDecimal = Math.floor((voteAverage % 1) * 10); // الجزء بعد العلامة

  return (
    <Col
      xs="12"
      sm="6"
      md="4"
      lg="4"
      xl="3"
      className=""
      style={{ width: "300px" }}
    >
      <Zoom>
        <div className="card movie m-1 mb-4" style={{ border: "none" }}>
          <img
            width="300"
            height="450"
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            className="card__image"
            alt={mov.title}
          />
          <div className="movie-info">
            <h3>{mov.original_title}</h3>
            {/* <span className="green">
              {partBeforeDecimal}.{partAfterDecimal}
            </span> */}
          </div>
          <div className="overview text-center w-100 p-2">
            <p>تاريخ الانتاج : {mov.release_date}</p>
            <p>عدد التقييمات : {mov.vote_count}</p>
            {/* <h3>overview</h3>
            <p>{mov.overview === "" ? "لا تتوافر الان" : mov.overview}</p> */}
            <span className="green">
              التقييم : {partBeforeDecimal}.{partAfterDecimal}
            </span>
            <Link to={`/movie/${mov.id}`}>
              <button className="btn ">Let's Go</button>
            </Link>
          </div>
        </div>
      </Zoom>
    </Col>
  );
};

export default MoviesCard;
