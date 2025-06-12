import { Link } from "react-router";
import "./galleryItem.css";
import ItemImage from "../itemImage/ItemImage";

const GalleryItem = ({ item }) => {
  const URL = import.meta.env.VITE_URL_IK_ENDPOINT;
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <ItemImage path={item.media} url={URL} w={372} h={optimizedHeight} />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <img src="general/share.svg" alt="" />
        </button>
        <button>
          <img src="general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
