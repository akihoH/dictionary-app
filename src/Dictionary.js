import React, { useState } from "react";
import axios from "axios";
import './Dictionary.css'
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword)
  let [results, setResults] = useState(null)
  let [loaded, setLoaded] = useState(false)
  let [photos, setPhotos] = useState(null)

  function handleResponse(response) {
    console.log(response.data[0])
    setResults(response.data[0])
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f91700001000001deff7eb89887412cb9c503f3b3167618";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(pexelsApiUrl, {headers: { Authorization: `Bearer ${pexelsApiKey
    }` }, }).then(handlePexelsResponse);
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
    <Photos photos={photos} />
  </div>
} else {
  load();
}

}
