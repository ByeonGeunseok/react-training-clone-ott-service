import { useEffect, useState } from "react";

function App() {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);

    return (
        <div>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} alt={movie.title} />
                            <h2>
                                {movie.title}/{movie.year}
                            </h2>
                            <p>{movie.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
