import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, year, summary }) {
    return (
        <div>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} alt={title} />
                <h2>
                    {title} / {year}
                </h2>
            </Link>
            <p>{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
};
export default Movie;
