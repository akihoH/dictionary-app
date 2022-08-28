import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          {props.meaning.definitions[0].definition}
          {props.meaning.definitions[0].example}
          <br />
          <br />
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
