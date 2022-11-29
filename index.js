const Notification = (props) => {
  //  Write your code here.
  const { className, text, iconUrl } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1>Notifications</h1>
    <div>
      <Notification
        className="information"
        text="Information Message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success"
        text="Success Message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning"
        text="Warning Message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="error"
        text="Error Message"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
