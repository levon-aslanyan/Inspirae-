import { useState } from "react";
import ItemImage from "../itemImage/ItemImage";
import "./UserButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const currentUser = true;
  const URL = import.meta.env.VITE_URL_IK_ENDPOINT;

  return currentUser ? (
    <div className="userButton">
      <ItemImage
        className="userAvatar"
        path="/general/noAvatar.png"
        alt="Avatar"
      />
      <ItemImage
        path="/general/arrow.svg"
        alt="Arrow"
        className="arrow"
        onClick={() => setOpen((prev) => !prev)}
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
