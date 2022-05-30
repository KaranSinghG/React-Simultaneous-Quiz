import React from "react";

import Navigations from "./Navigations";

function Quiz({ showQuiz, setShowQuiz }) {
  function startHandler() {
    setShowQuiz(true);
  }
  if (showQuiz) {
    return (
      <div className="grid_item">
        <h2>Question</h2>
        <h1>3+5</h1>
        <h2>Answer</h2>
        <input type="number"></input>
        <br />
        <br />
        <Navigations />
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <br />
        <button onClick={startHandler}>Start</button>
      </div>
    );
  }
}

export default Quiz;
