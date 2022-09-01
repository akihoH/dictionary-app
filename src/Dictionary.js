import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css'
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword)
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false)

  function handleResponse(response) {
    console.log(response.data[0])
    setResults(response.data[0])
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }


  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  function load() {
    setLoaded(true)
    search()
  }

if(loaded) {
  return <div className="Dictionary">
    <div className="Search">
      <form onSubmit={handleSubmit} className="form-group">
        <input type="search" autoFocus={true} className="form-control" onChange={handleKeywordChange} placeholder="What word do you want to look up?"/>
      </form>
    </div>
    <Results results={results} />
  </div>
} else {
  load();
}

}
