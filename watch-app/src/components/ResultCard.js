import React from "react";
import './ResultCard.css';
import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";



const ResultCard = ({ movie }) => {

    const MovieContext = useMovieContext();
    const storedMovies = MovieContext.watchlist.find(ele => ele.imdbID === movie.imdbID);
    const storedWatched = MovieContext.watched.find(ele => ele.imdbID === movie.imdbID);
    const watchlistDisabled = storedMovies ? true : storedWatched ? true : false;
    const watchedDisabled = storedWatched ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {
                    movie.Poster ? (
                        <img src={movie.Poster} alt={movie.Title} />
                    ) : (
                        <div className="filter-poster"></div>
                    )}
            </div>
            <div className="info">
                <div className="heading">
                    <h3 className="title">{movie.Title}</h3>
                    {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
                </div>

                <div className="controls">
                    <button
                        onClick={() => MovieContext.MoviesDispatch(
                            {
                                type: actions.ADD_MOVIE_TO_WATCHLIST,
                                payload: movie,
                            }
                        )}
                        disabled={watchlistDisabled}
                        className="btn">
                        Add WatchList
                    </button>

                    <button
                        onClick={() => MovieContext.MoviesDispatch(
                            {
                                type: actions.ADD_MOVIE_WATCHED,
                                payload: movie,
                            }
                        )}
                        disabled={watchedDisabled}
                        className="btn">
                        Add Watched
                    </button>
                </div>

            </div>



        </div>
    )
};

export default ResultCard;