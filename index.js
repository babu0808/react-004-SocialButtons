const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="social-buttons-container">
    <div classNam="content-container">
      <h1 className="title">
        <div classNam="buttons-container">
          <button className="button-like" buttonText="like">
            Like
          </button>
          <button className="button-comment" buttonText="Comment">
            Comment
          </button>
          <button className="button-share" buttonText="Share">
            Share
          </button>
        </div>
      </h1>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
