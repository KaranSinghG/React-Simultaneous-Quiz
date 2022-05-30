import "./styles.css";

import Header from "./Components/Header";
import Quiz from "./Components/Quiz";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Grid">
        <Quiz />
        <Quiz />
      </div>
    </div>
  );
}
