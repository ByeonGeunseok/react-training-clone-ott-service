import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const [isLoading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <div>{movie.title}</div>
                    <h6>
                        {movie.year} / {movie.rating}
                    </h6>
                    <div>
                        <img src={movie.medium_cover_image} alt={movie.title} />
                    </div>
                    <div>{movie.description_full}</div>
                </div>
            )}
        </div>
    );
}

export default Detail;
