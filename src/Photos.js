import React from "react";
import './Photos.css'

export default function Photos(props) {
  if (props.photos) {
  return (
    <section className="Photos">
      <div>
        {props.photos.map(function (photo, index) {
         return (
           <div key={index}>
            <img src={photo.src.landscape} alt="" width={500}></img>
          </div>
         )
        })}
      </div>
    </section>
  )
  } else {
    return null;
  }
}
