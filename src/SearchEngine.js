import React, { useState } from "react";
import "./SearchEngine.css";
import Word from "./Word";
import Images from "./Images";

export default function SearchEngine() {
  const [searchedWord, setSearchedWord] = useState("moon");

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleSearch(event) {}

  return (
    <div className="SearchEngine">
      <form className="form" onSubmit={handleSubmit}>
        <input type="search" className="search-field" onChange={handleSearch} />
      </form>

      <div className="suggested-words">
        suggested words: book, kitten, wine...
      </div>

      <Word />

      <Images />
    </div>
  );
}
