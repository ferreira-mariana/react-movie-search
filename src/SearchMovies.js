import "./SearchMovies.css";
import React from "react";

export default function SearchMovies() {
  return (
    <form className="form">
      <label className="label" htmlFor="query">Movie name</label>
      <input className="input" type="text" name="query" placeholder="i.e. Hidden Figures" />
      <button className="button">Search</button>
    </form>
  )
}
