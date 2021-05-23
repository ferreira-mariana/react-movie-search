import "./SearchMovies.css";
import React from "react";

export default function SearchMovies() {

  const searchMovies = async (e) => {
    e.preventDefault(); //prevent posting data in the query params, so do not reload the page
    console.log('submitting')

    const query = "Hidden Figures";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=360856431243f95bd6f5ee6c18caed11&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url)
      const data = await res.json();
      console.log(data);
    } catch(err) {
      console.error(err)
    }
    
  }

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie name</label>
      <input className="input" type="text" name="query" placeholder="i.e. Hidden Figures" />
      <button className="button">Search</button>
    </form>
  )
}
