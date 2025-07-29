import ItemImage from "../itemImage/ItemImage";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <ItemImage path="/general/logo.png" alt="" className="logo" />
        </a>
        <a href="/" className="menuIcon">
          <ItemImage path="/general/home.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <ItemImage path="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <ItemImage path="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menuIcon">
          <ItemImage path="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <ItemImage path="/general/settings.svg" alt="" />
      </a>
    </div>
  );
};

export default LeftBar;
