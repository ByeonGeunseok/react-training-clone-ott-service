import PropTypes from "prop-types";

function Movie({ coverImg, title, year, summary }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                {title} / {year}
            </h2>
            <p>{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
};
export default Movie;
