import './flashcard.css';

const Flashcard = ({ cardNumber, onDelete }) => {
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
            />
          </div>
          <div className="text-container">
            <input
              type="text"
              placeholder="Add a definition or answer..."
              className="card-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
