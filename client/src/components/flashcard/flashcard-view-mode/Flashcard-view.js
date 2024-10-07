import './flashcard-view.scss'

const FlashcardView = ({cardNumber}) => {
    return (
        <div className='view-card-container'>
            <div className='view-card-toolbar'>
                <span className='view-card-number'>{cardNumber}</span>
            </div>
            <div className='view-card-body'>
                <div className='view-card-content'>
                    <div className='view-text-container'>
                        <p>Term</p>
                    </div>
                    <div className='view-text-container'>
                        <p>Definition</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashcardView;