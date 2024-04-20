import React, { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import ResultCard from "./ResultCard";

const Add = () => {

    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=6f7fe85a`)
            .then(res => {
                if (res.data.Search) {
                    setMovies(res.data.Search);
                }
            })
            .catch(err => console.log(err))
    }, [searchValue])

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-container">
                        <input type="text" placeholder="Search Movie"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                    </div>
                    {
                        movies.length > 0 && <ul className="results">
                            {
                                movies.map(movie => (<li key={movie.imdbID}>
                                    {<ResultCard movie={movie} />}
                                </li>))
                            }
                        </ul>

                    }
                </div>
            </div>
        </div>
    )
}

export default Add;