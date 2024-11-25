import { useNavigate } from 'react-router-dom';
import Button from './Button'
import { getAuth } from 'firebase/auth';

//Navigation Buttons
export function CreateAccountNavButton() {
    return  (
      <Button text='Create Account' navigateTo='/signup' />
    );
  }

  export function EditorNavButton() {
    const navigate = useNavigate();
  
    const handleNavigation = () => {
      navigate('/Editor');
    };
  
    return (
      <Button text="Editor" onClick={handleNavigation} />
    );
  }

  export function BackToLoginButton() {
    return  (
      <Button text='Back' navigateTo='/' />
    );
  }

  export function BackToHomeButton() {
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;

    const handleBack = () => {
        if (user) {
            navigate(`/Home/${user.uid}`);
        } else {
            console.error("No authenticated user found.");
        }
    };

    return <Button text="Back" onClick={handleBack} />;
}
