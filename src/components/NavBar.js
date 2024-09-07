import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../redux/actions/movieAction";

const NavBar = () => {
  const onSearch = (word) => {
    search(word);
  };
  const dispatch = useDispatch();

  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  return (
    <header>
      <Container>
        <Row>
          <Col sm={12}>
            <a href="/">
              <div class="content">
                <h2>wecima</h2>
                <h2>wecima</h2>
              </div>
            </a>
            <div className="search">
              {/* <i class="fa-solid fa-magnifying-glass"></i> */}
              <input
                type="text"
                id="search"
                className="search"
                placeholder="ابحث...."
                onChange={(e) => onSearch(e.target.value)}
              />
              {/* <i class="bi bi-search"></i> */}
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default NavBar;
