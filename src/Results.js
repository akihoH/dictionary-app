import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import './Results.css'

export default function Results(props) {
  if (props.results) {
  return (
  <div className="Results">
    <section>
      <div className="Summary">
        <Phonetic phonetic={props.results.phonetics[0]} />
        <h2>{props.results.word}</h2>
      </div>
    </section>
    <section>
      {props.results.meanings.map(function (meaning, index){
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </section>
  </div>);
  } else {
    return null;
  }
}
