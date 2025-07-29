import "./postInteraction.css";
import ItemImage from "../itemImage/ItemImage";

const PostInteraction = () => {
  return (
    <div className="interactionPost">
      <div className="interactionIcon">
        <ItemImage path="general/react.svg" />
        <ItemImage path="/general/share.svg" />
        <ItemImage path="/general/more.svg" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteraction;
