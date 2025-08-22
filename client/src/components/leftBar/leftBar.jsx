import ItemImage from "../itemImage/ItemImage";
import { Link } from "react-router";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <ItemImage path="/general/logo.png" alt="" className="logo" />
        </Link>
        <Link to="/" className="menuIcon">
          <ItemImage path="/general/home.svg" alt="" />
        </Link>
        <Link to="/create" className="menuIcon">
          <ItemImage path="/general/create.svg" alt="" />
        </Link>
        <Link to="/" className="menuIcon">
          <ItemImage path="/general/updates.svg" alt="" />
        </Link>
        <Link to="/" className="menuIcon">
          <ItemImage path="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link to="/" className="menuIcon">
        <ItemImage path="/general/settings.svg" alt="" />
      </Link>
    </div>
  );
};

export default LeftBar;
