import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import '../style/detail.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div>
          <i className="fas fa-film blink"></i>
          <h1 className="loading">Loading...</h1>
        </div>
      ) : (
        <div className="container">
          <button className="back">
            <Link to={`/`}>
              <i className="fas fa-chevron-left"></i>이전으로
            </Link>
          </button>
          <h1>{movies.title}</h1>
          <div className="container2">
            <img src={movies.medium_cover_image}></img>
            <div className="container3">
              <p>제목: {movies.title}</p>
              <ul>
                장르: &nbsp;
                {movies.genres.map((genre) => (
                  <li key={genre}> {genre}</li>
                ))}
              </ul>
              <p>좋아요: {movies.like_count}</p>
              <p>별점: {movies.rating}점</p>
              <p>상영시간: {movies.runtime}분</p>
              <p>줄거리: {movies.description_full}</p>
            </div>
          </div>
          <div className="book">
            <button>예매하기</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
