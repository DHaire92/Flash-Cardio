import { useNavigate } from 'react-router-dom';

function Button({ text, navigateTo, onClick }) {
    const navigate = useNavigate();

    const handleClick = async () => {
        if (onClick) {
            onClick(); // Call the custom onClick if provided
          } else if (navigateTo) {
            navigate(navigateTo); // Default to using navigateTo if no onClick
          }
    };

    return (
        <button className="main-button" onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;
