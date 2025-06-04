import { useState } from "react";
import "./UserButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img className="userAvatar" src="./general/noAvatar.png" alt="" />
      <img
        onClick={() => setOpen((prev) => !prev)}
        className="arrow"
        src="./general/arrow.svg"
        alt=""
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / sign up
    </a>
  );
};

export default UserButton;
