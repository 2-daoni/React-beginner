import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, Img, title, year, summary, genres }) {
  return (
    <div>
      <img src={Img} alt={title} />
      <h2>
        <Link to={`/info/${id}`}> {title} </Link>
      </h2>
      <h3>{year}</h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
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
