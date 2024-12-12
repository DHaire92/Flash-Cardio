import './flashcard-view.scss'

const FlashcardView = ({ cardNumber, cardContents }) => {
    return (
      <div className="card-container">
        <div className="card-toolbar">
          <span className="card-number">{cardNumber}</span>
        </div>
  
        <div className="card-body">
          <div className="card-content">
            <div className="text-container">
              <div className="card-input">
                {cardContents.front} 
              </div>
  
              <div className="card-input">
                {cardContents.back}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default FlashcardView;