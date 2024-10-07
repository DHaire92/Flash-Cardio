import './flashcard.scss';
import { useState } from 'react';

const Flashcard = ({ cardNumber, cardContents, onDelete, onUpdateFront, onUpdateBack}) => {
  const [front, setFront] = useState(cardContents.front);
  const [back, setBack] = useState(cardContents.back);

  return (
    <div className="card-container">
      <div className="card-toolbar">
        <span className="card-number">{cardNumber}</span>
        <button className="delete-card" onClick={onDelete}>X</button>
      </div>

      <div className="card-body">
        <div className="card-content">
          <div className="text-container">
            <input
              type="text"
              className="card-input"
              placeholder="Add a term or question..."
              value={front}
              onChange={(e) => {
                setFront(e.target.value);
                onUpdateFront(e.target.value);
              }}
            />

            <input
              type="text"
              className="card-input"
              placeholder="Add a definition or answer..."
              value={back}
              onChange={(e) => {
                setBack(e.target.value);
                onUpdateBack(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
