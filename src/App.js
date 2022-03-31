import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// api-Key- f5652c35

const API_URL = "https://www.omdbapi.com?apikey=f5652c35";
const App = () => {

    const [movies, setMovies] = useState([]);
    const [SearchMovie, setSearchMovie] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }

     useEffect(() => {
        searchMovies('Harry Potter');
     }, []);
    return (
    <div  className="app">
        <h1>MovieLand</h1>

        <div className="search">
        <input 
            placeholder="Search for movies"
            value = {SearchMovie}
            onChange = {(event) => {setSearchMovie(event.target.value)}}
        />
         <img 
             src = {SearchIcon}
             alt = "Search"
             onClick = { ()=> searchMovies(SearchMovie)}
         />   
        </div>

        {
            movies?.length > 0
            ? (
                <div className="container">
                   {movies.map((movie) => (
                       <MovieCard movie = {movie} />
                   ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )
        }
    </div>
    );
}

export default App;