import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, Img, title, year, genres }) {
  return (
    <div className="movie">
      <img src={Img} alt={title} />
      <h1>
        <Link to={`/info/${id}`}> {title} </Link>
      </h1>
      <h3>{year}</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre} </li>
        ))}
      </ul>
      <button>예매하기</button>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  Img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
