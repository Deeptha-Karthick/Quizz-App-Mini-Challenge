import { useState, useMemo } from "react";
const Question = ({
  currentQuestion,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  setAnswersArray,
  setShowResults,
  questions,
}) => {
  const [disabled, setDisabled] = useState(true);
  const showNext = useMemo(() => {
    return currentQuestionIndex !== questions.length - 1;
  }, [currentQuestionIndex, questions.length]);

  const showFinish = useMemo(() => {
    return currentQuestionIndex === questions.length - 1;
  }, [currentQuestionIndex, questions.length]);

  const onAnswerClick = (id) => {
    setAnswersArray((prev) => {
      return [...prev, currentQuestion.answer === id];
    });
    setDisabled(false);
  };

  const onNextClick = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const onFinishClick = () => {
    setShowResults(true);
  };

  return (
    <>
      <div> {currentQuestion.q}</div>
      <div className="answers">
        {currentQuestion.a.map((el) => {
          return (
            <div key={el.id} onClick={() => onAnswerClick(el.id)}>
              {el.ops}
            </div>
          );
        })}
      </div>
      {showNext && (
        <button disabled={disabled} onClick={onNextClick}>
          Next
        </button>
      )}
      {showFinish && (
        <button disabled={disabled} onClick={onFinishClick}>
          Finish
        </button>
      )}
    </>
  );
};

export default Question;
