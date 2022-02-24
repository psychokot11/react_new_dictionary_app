import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import Word from "./Word";
import Images from "./Images";

export default function SearchEngine() {
  const [searchedWord, setSearchedWord] = useState("moon");
  const [wordData, setWordData] = useState(null);
  const [photoData, setPhotoData] = useState(null);

  function handleDictionaryResponse(response) {
    setWordData(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotoData(response.data.photos);
    console.log(response.data.photos);
  }

  function search() {
    let dictionaryURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
    axios.get(dictionaryURL).then(handleDictionaryResponse);
    let pexelsKey = "563492ad6f91700001000001daedf3e1b4b646f88958b096669822ab";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${searchedWord}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSearch(event) {
    setSearchedWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

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
