import "./styles.css";

import { useState } from "react";

import Header from "./Components/Header";
import Quiz from "./Components/Quiz";

export default function App() {
  const [showQuiz1, setShowQuiz1] = useState(false);
  const [showQuiz2, setShowQuiz2] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="Grid">
        <Quiz showQuiz={showQuiz1} setShowQuiz={setShowQuiz1} />
        <Quiz showQuiz={showQuiz2} setShowQuiz={setShowQuiz2} />
      </div>
    </div>
  );
}
