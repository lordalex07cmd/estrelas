import React from "react";

function Rating({ children }) {
  const ratingArredondado = Math.round(children);

  let estrelas = "";

  for (let i = 0; i < 5; i++) {
    if (i < ratingArredondado) {
      estrelas += "★";
    } else {
      estrelas += "☆";
    }
  }

  return <div className="rating">{estrelas}</div>;
}

export default Rating;
