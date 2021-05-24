import "./SearchMovies.css";
import React, {useState} from "react";
import MovieCard from "./MovieCard";

export default function SearchMovies() {

  //states
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault(); //prevent posting data in the query params, so do not reload the page

    const url = `https://api.themoviedb.org/3/search/movie?api_key=360856431243f95bd6f5ee6c18caed11&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url)
      const data = await res.json();
      setMovies(data.results)
    } catch(err) {
      console.error(err)
    }
    
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Movie name</label>
        <input className="input" type="text" name="query" placeholder="i.e. Hidden Figures" 
          value={query} onChange={(event) => setQuery(event.target.value)}
        />
        <button className="button">Search</button>
      </form>
      {movies && 
        <div className="card-list">
          {movies.filter(movie => movie.poster_path).map(movie => (
            <MovieCard movie={movie}  key={movie.id} />
          ))}
        </div>
      }
    </>
  )
}
