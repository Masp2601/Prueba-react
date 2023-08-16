import './github-button.css';

const GithubButton = ({ ...props }) => {
  return (
    <div {...props} className="auth-button">
      <span className="icon github-button"></span>
      <span className="buttonText">Github</span>
    </div>
  )
}

export default GithubButton;
