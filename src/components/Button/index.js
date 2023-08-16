import './button.css';

const Button = ({ text, handleClick = null, ...rest }) => {
  return (
    <button {...rest} onClick={handleClick} className="button-base">
      {text}
    </button>
  )
}

export default Button;
