import React from "react";
import { useState } from "react";

import Navigations from "./Navigations";
import Score from "./Score";
import Timer from "./Timer";

function Quiz({ showQuiz, setShowQuiz, score, setScore }) {
  const [numberQuestions, setNumberQuestions] = useState(10);
  const [numberOperands, setNumberOperands] = useState(10);
  const [answer, setAnswer] = useState(Number);
  const [answerList, setAnswerList] = useState([]);
  const [operation, setOperation] = useState([]);
  const [question, setQuestions] = useState({ ques: [], ans: [] });
  const [number, setNumber] = useState(0);

  const handleCheck = (event) => {
    var updatedList = [...operation];
    if (event.target.checked) {
      updatedList = [...operation, event.target.value];
    } else {
      updatedList.splice(operation.indexOf(event.target.value), 1);
    }
    setOperation(updatedList);
  };

  function inputQuestionsHandler(e) {
    setNumberQuestions(e.target.value);
  }

  function inputOperandsHandler(e) {
    setNumberOperands(e.target.value);
  }

  function answerHandler(e) {
    setAnswer(e.target.value);
  }

  function resetHandler() {
    setQuestions({ ques: [], ans: [] });
    setShowQuiz(0);
  }

  function startHandler() {
    var tempList = [...question.ques];
    var tempCorrectAnsList = [...question.ans];
    for (let i = 0; i < numberQuestions; i++) {
      const op1 = Math.floor(Math.random() * (numberOperands + 1));
      const op2 = Math.floor(Math.random() * (numberOperands + 1));
      const op = operation[Math.floor(Math.random() * operation.length)];
      tempList = [...tempList, op1 + " " + op + " " + op2];
      if (op === "+") {
        tempCorrectAnsList = [...tempCorrectAnsList, op1 + op2];
      } else if (op === "-") {
        tempCorrectAnsList = [...tempCorrectAnsList, op1 - op2];
      } else if (op === "*") {
        tempCorrectAnsList = [...tempCorrectAnsList, op1 * op2];
      } else if (op === "/") {
        tempCorrectAnsList = [...tempCorrectAnsList, Math.floor(op1 / op2)];
      }
    }
    setQuestions([tempList, tempCorrectAnsList]);
    setShowQuiz(1);
  }

  const checkList = ["+", "-", "*", "/"];

  if (showQuiz === 1) {
    return (
      <div className="grid_item">
        <h2>Question {number + 1}</h2>
        <h1>{question[0][number]}</h1>
        <input onChange={answerHandler} value={answer} type="number"></input>
        <br />
        <br />
        <Navigations
          number={number}
          setNumber={setNumber}
          showQuiz={showQuiz}
          setShowQuiz={setShowQuiz}
          answerList={answerList}
          setAnswerList={setAnswerList}
          answer={answer}
          numberQuestions={numberQuestions}
          score={score}
          setScore={setScore}
          question={question}
          setQuestion={setQuestions}
        />
        <Score score={score} />
      </div>
    );
  } else if (showQuiz === 0) {
    return (
      <div className="grid_item">
        <br />
        <br />
        <h2>Number of Questions</h2>
        <input
          onChange={inputQuestionsHandler}
          value={numberQuestions}
          type="number"
          min="1"
          max="20"
        />
        <br />
        <h2>Use operands till</h2>
        <input
          onChange={inputOperandsHandler}
          value={numberOperands}
          type="number"
          min="10"
          max="15"
        />
        <br />
        <br />
        <h2>Operations</h2>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <br />
        <br />
        <button onClick={startHandler}>Start</button>
        <br />
      </div>
    );
  } else if (showQuiz === 2) {
    return (
      <div>
        <h2>Results</h2>
        {question[0].map((ques, index) => (
          <div
            className={
              answerList[index].toString() === question[1][index].toString()
                ? "green"
                : "red"
            }
            key={ques}
          >
            {ques} = {answerList[index]}
          </div>
        ))}
        <Score score={score} />
        <button onClick={resetHandler}>Reset</button>
      </div>
    );
  }
}

export default Quiz;
