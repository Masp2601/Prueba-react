import './google-button.css';

const GoogleButton = ({ ...props }) => {
  return (
    <div {...props} className="auth-button">
      <span className="icon google-button"></span>
      <span className="buttonText">Google</span>
    </div>
  )
}

export default GoogleButton;
