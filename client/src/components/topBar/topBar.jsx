import "./topBar.css";
import UserButton from "../userButton/userButton";
import ItemImage from "../itemImage/ItemImage";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* Search */}
      <div className="search">
        <ItemImage path="/general/search.svg" alt="Search" />
        <input placeholder="Search" type="text" />
      </div>

      {/* User */}

      <UserButton />
    </div>
  );
};

export default TopBar;
