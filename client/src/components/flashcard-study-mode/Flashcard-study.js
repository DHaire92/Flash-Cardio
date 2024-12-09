import React, { useState } from "react";
import "./flashcard-study.scss";

const FlashcardStudy = ({ cardContents }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="study-card-container" onClick={toggleFlip}>
      <div className={`study-card-body ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="study-card-content card-front">
          <div className="text-container">{cardContents.front}</div>
        </div>

        {/* Back Side */}
        <div className="study-card-content card-back">
          <div className="text-container">{cardContents.back}</div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardStudy;
