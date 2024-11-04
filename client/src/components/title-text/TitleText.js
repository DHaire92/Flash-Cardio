import './TitleText.scss'

const TitleText = ({children}) => {
  return (
    <header className="centered-login"> 
        {children.split('').map((letter) => (
        <span style={{animationDelay: `${Math.random()}s`}} className="rotating-letters">{letter === ' ' ? `\u00A0` : letter}</span>
        ))}
    </header>
  );
};

export default TitleText;