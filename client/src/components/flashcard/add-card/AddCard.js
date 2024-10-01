import './AddCard.css';

const AddCard = ({ onClick }) => {
  return (
    <div className="add-body" onClick={onClick}>
      <p className="add-text-container">Add Card +</p>
    </div>
  );
};

export default AddCard;