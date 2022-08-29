import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css'
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("")
  let [results, setResults] = useState(null)

  function handleResponse(response) {
    console.log(response.data[0])
    setResults(response.data[0])
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }



  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }


  return <div className="Dictionary">
    <div className="Search">
      <form onSubmit={search} className="form-group">
        <input type="search" autoFocus={true} className="form-control" onChange={handleKeywordChange} placeholder="Type a word that you want to seatch"/>
      </form>
      <p></p>
    </div>
    <Results results={results} />
  </div>
}
