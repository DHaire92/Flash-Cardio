import './flashcard.css'

const Flashcard = ({cardNumber}) => {
    return (
        <div className='card-container'>
            <div className='card-toolbar'>
                <span className='card-number'>{cardNumber}</span>
                <div className='delete-card'>X</div>
            </div>

            <div className='card-body'>
                <div className='card-content'>
                    <div className='text-container'>
                        <input 
                            type="text" 
                            className='card-input'
                            placeholder='Add a term or question...'
                        />
                    </div>
                    <div className='text-container'>
                        <input 
                            type="text"
                            placeholder="Add a definition or answer..."
                            className='card-input'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;