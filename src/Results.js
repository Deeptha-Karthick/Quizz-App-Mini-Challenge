const Results = ({ answersArray }) => {
  const right = answersArray.map((el) => el === true).length;
  return (
    <>
      <div>Results</div>
      <div> {`Total Questions: ${answersArray.length}`}</div>
      <div> {`Right answers: ${right}`}</div>
      <div> {`Wrong Answers: ${answersArray.length - right}`}</div>
    </>
  );
};

export default Results;
