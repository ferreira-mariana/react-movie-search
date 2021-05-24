import "./App.css";
import SearchMovies from "./movies/SearchMovies";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
    </div>
  );
}
