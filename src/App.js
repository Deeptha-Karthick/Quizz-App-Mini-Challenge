import "./styles.css";
import { useState, useMemo } from "react";
import Questions from "../Questions";
import Question from "./Question";
import Results from "./Results";
export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="App">
      <h1>Quizz App</h1>
      <div className="quizz-container">
        {showResults ? (
          <div className="results">
            <Results answersArray={answersArray} />
          </div>
        ) : (
          <div className="questions">
            <Question
              key={currentQuestionIndex}
              currentQuestion={Questions[currentQuestionIndex]}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              currentQuestionIndex={currentQuestionIndex}
              setAnswersArray={setAnswersArray}
              questions={Questions}
              setShowResults={setShowResults}
            />
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
}
