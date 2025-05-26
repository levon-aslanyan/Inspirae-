import "./UserButton.css";

const UserButton = () => {
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img className="userAvatar" src="./general/noAvatar.png" alt="" />
      <img className="arrow" src="./general/arrow.svg" alt="" />
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / sign up
    </a>
  );
};

export default UserButton;
