import React, { createContext, useState } from 'react';
import Question from '../../models/Question';

// Create a context
export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  // Initialize the question list
  const [questions, setQuestions] = useState([
    new Question("What is React?"),
    new Question("What is useState in React?"),
    new Question("Explain the Virtual DOM."),
  ]);

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
    {children}
    </QuestionContext.Provider>
  );
};
