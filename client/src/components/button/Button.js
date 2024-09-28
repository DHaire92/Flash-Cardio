import './button.css';
import { useNavigate } from 'react-router-dom';
import useTestHook from '../../hooks/test_hook';

function Button({ text, navigateTo }) {
    const navigate = useNavigate();
    const { testServer } = useTestHook();

    const handleClick = async () => {
        await testServer();
        navigate(navigateTo);
    };

    return (
        <button className="main-button" onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button;
