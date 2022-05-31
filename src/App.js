import "./styles.css";

import { useState } from "react";

import Header from "./Components/Header";
import Quiz from "./Components/Quiz";

export default function App() {
  const [showQuiz1, setShowQuiz1] = useState(0);
  const [showQuiz2, setShowQuiz2] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  return (
    <div className="App">
      <Header score1={score1} score2={score2} />
      <div className="Grid">
        <Quiz
          showQuiz={showQuiz1}
          setShowQuiz={setShowQuiz1}
          score={score1}
          setScore={setScore1}
        />
        <Quiz
          showQuiz={showQuiz2}
          setShowQuiz={setShowQuiz2}
          score={score2}
          setScore={setScore2}
        />
      </div>
    </div>
  );
}
