import React, { useState } from "react";


export const QuestionList = ({ list = [] }) => {

  return (
    <div>
      {list.map((question, index) => (
        <div key={index}>
          <h3>{question.problem}</h3>
        </div>
      ))}
    </div>
  )
}
  
