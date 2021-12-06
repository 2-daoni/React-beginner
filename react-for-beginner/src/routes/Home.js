import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import '../style/style.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
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
          <h1 className="main-title">
            Choose Your <span className="red">Movie</span>
          </h1>
          <div className="movie_container ">
            {movies.map((movie) => (
              <Movie key={movie.id} id={movie.id} Img={movie.medium_cover_image} title={movie.title} year={movie.year} summary={movie.summary} genres={movie.genres} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
