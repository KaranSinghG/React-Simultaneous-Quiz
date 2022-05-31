import React from "react";

function Header({ score1, score2 }) {
  return (
    <div>
      <h2>Cumulative Score </h2>

      <h1>{score1 + score2}</h1>
    </div>
  );
}

export default Header;
