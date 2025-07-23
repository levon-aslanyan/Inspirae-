import "./topBar.css";
import UserButton from "../userButton/userButton";
import ItemImage from "../itemImage/ItemImage";

const TopBar = () => {
  const URL = import.meta.env.VITE_URL_IK_ENDPOINT;
  return (
    <div className="topBar">
      {/* Search */}
      <div className="search">
        <ItemImage path="/general/search.svg" url={URL} alt="Search" />
        <input placeholder="Search" type="text" />
      </div>

      {/* User */}

      <UserButton />
    </div>
  );
};

export default TopBar;
