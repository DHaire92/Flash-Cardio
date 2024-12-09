import React, { useState } from "react";
import "./flashcard-study.scss";

const FlashcardStudy = ({ cardNumber, cardContents }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="card-container" onClick={toggleFlip}>
      <div className={`card-body ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="card-content card-front">
          <div className="text-container">{cardContents.front}</div>
        </div>

        {/* Back Side */}
        <div className="card-content card-back">
          <div className="text-container">{cardContents.back}</div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardStudy;
