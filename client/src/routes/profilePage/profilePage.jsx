import "./profilePage.css";
import ItemImage from "../../components/itemImage/ItemImage";
import Gallery from "../../components/gallery/gallery";
import Collections from "../../components/collections/collections";
import { useState } from "react";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  return (
    <div className="profilePage">
      <ItemImage
        className="profileImg"
        w={100}
        h={100}
        path="general/noAvatar.png"
      />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUserName">@johndoe</span>
      <div className="profileFollowers">10 follower / 20 followings</div>
      <div className="profileIneraction">
        <ItemImage path="general/share.svg" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <ItemImage path="general/more.svg" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
