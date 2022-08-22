import React from "react";

export default function Meaning(porps) {
  return (
    <div className="Meaning">
      <h3>{porps.meaning.partOfSpeech}</h3>
      {porps.meaning.definitions.map(function (definition, index)
      {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}

