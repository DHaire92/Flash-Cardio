import './AddCard.scss';

const AddCard = ({ children, onClick }) => {
  return (
    <div className="add-body" onClick={onClick}>
      <p className="add-text-container">Add {children} +</p>
    </div>
  );
};

export default AddCard;