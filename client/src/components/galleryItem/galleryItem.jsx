import { Link } from "react-router";
import "./galleryItem.css";
import ItemImage from "../itemImage/ItemImage";

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <ItemImage path={item.media} w={372} h={optimizedHeight} />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <ItemImage path="/general/share.svg" alt="" />
        </button>
        <button>
          <ItemImage path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
