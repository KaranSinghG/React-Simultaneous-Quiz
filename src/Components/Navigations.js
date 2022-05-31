import React from "react";
import { useState } from "react";

import Timer from "./Timer";

function Navigations({
  number,
  setNumber,
  showQuiz,
  setShowQuiz,
  answerList,
  setAnswerList,
  answer,
  numberQuestions,
  score,
  setScore,
  question,
  setQuestion
}) {
  const [tempAnsList, setTempAnsList] = useState([]);
  const [nextClicked, setNextClicked] = useState(true);

  function handleSubmit() {
    setShowQuiz(2);
  }

  function nextHandler() {
    setTempAnsList([...tempAnsList, answer]);
    if (number + 1 === numberQuestions) {
      handleSubmit();
    } else {
      if (answer.toString() === question[1][number].toString()) {
        setScore(score + 1);
      }
      setNumber(number + 1);
    }
    setAnswerList([...tempAnsList, answer]);
    setNextClicked(true);
  }

  return (
    <div>
      <button onClick={nextHandler}>Next</button>

      <br />
      <br />
      <Timer
        nextHandler={nextHandler}
        nextClicked={nextClicked}
        setNextClicked={setNextClicked}
      />
    </div>
  );
}

export default Navigations;
