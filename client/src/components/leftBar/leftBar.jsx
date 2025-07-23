import ItemImage from "../itemImage/ItemImage";
import "./leftBar.css";

const LeftBar = () => {
  const URL = import.meta.env.VITE_URL_IK_ENDPOINT;

  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <ItemImage
            url={URL}
            path="/general/logo.png"
            alt=""
            className="logo"
          />
        </a>
        <a href="/" className="menuIcon">
          <ItemImage url={URL} path="/general/home.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <ItemImage url={URL} path="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <ItemImage url={URL} path="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <ItemImage url={URL} path="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <ItemImage url={URL} path="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
