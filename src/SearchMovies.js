import "./SearchMovies.css";
import React, {useState} from "react";

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
      console.log('movies', movies)
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
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <div className="card" key={movie.id}>
            <img 
              className="card--image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + ' poster'}
            />
            <div className="card--content">
              <h3 className="card--title">{ movie.title }</h3>
              <p><small>RELEASE DATE: { movie.release_date }</small></p>
              <p><small>RATING: { movie.vote_average }</small></p>
              <p className="card--desc">{ movie.overview }</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
