import React, { useContext } from "react";
import { QuestionContext } from "../components/questions/QuestionContext"; 

const QuestionList = () => {
  // Access questions from the QuestionContext
  const { questions } = useContext(QuestionContext);

  console.log(questions);
  // If there are no questions, show a message
  if (!questions || questions.length === 0) {
    return <p>No questions available.</p>;
  }

  return (
    <header>
    {questions.map((question, index) => (
      <div key={index}>
        <h3 className="question-text">{question.problem}</h3>
      </div>
    ))}
    </header>
  );
};

export default QuestionList;

