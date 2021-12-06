import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovies(json.data.movie);
    setLoading(false);
    console.log(json);
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
        <div>
          <h1>Detail</h1>
          <h1>{movies.title}</h1>
          <img src={movies.medium_cover_image}></img>
          <span>
            장르:
            <ul>
              {movies.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </span>

          <p>별점: {movies.rating}점</p>
          <p>상영시간: {movies.runtime}분</p>
        </div>
      )}
    </div>
  );
}
export default Detail;
