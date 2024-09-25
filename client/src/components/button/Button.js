import './button.css'
import { useNavigate } from 'react-router-dom';

function Button({ text, navigateTo }) {
    const navigate = useNavigate();

    return (
        <button className="main-button" onClick={() => navigate(navigateTo)}> {text} </button>
    );
}

export default Button;