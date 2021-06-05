import { useEffect, useState } from "react";
import "./App.css";
import MovieContainer from "./MovieContainer";

function App() {
  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const getMovies = async (q) => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=da5c7c5&s=${q}`;
    await fetch(url).then(async (success) => {
      var res = await success.json();
      if (res.Search) {
        console.log(res.Search);
        var a = res.Search;
        setMovies(() => a.map((e) => e));
        // console.log("Titles : " + movies.toString());
      }
    });
  };
  useEffect(() => {
    getMovies(input);
  }, [input]);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px 40px 10px 40px ",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white", fontSize: "20px" }}>Movie Search</h1>
        <input
          type="text"
          placeholder="Enter movie name"
          style={{
            display: "flex",
            outline: "none",
            minHeight: "50px",
            maxWidth: "500px",
            width: "400px",
            borderRadius: "5px",
            marginTop: "10px",
            fontSize: "25px",
            padding : "0px 10px"
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {movies.map((data, idx) => (
          <MovieContainer
            id={idx}
            name={data.Title}
            year={data.Year}
            poster={data.Poster}
            type={data.Type}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
