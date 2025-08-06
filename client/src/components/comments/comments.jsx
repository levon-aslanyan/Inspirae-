import "../comments/comments.css";
import EmojiPicker from "emoji-picker-react";
import ItemImage from "../itemImage/ItemImage";
import { useState } from "react";

const Comments = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 Comments</span>

        {/* Comments */}
        <div className="comment">
          <ItemImage path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              nemo?
            </p>
            <span className="commentTime">1hour</span>
          </div>
        </div>
        {/* Comments */}
        <div className="comment">
          <ItemImage path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              nemo?
            </p>
            <span className="commentTime">1hour</span>
          </div>
        </div>
        {/* Comments */}
        <div className="comment">
          <ItemImage path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className="commentUsername">John</span>
            <p className="commentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              nemo?
            </p>
            <span className="commentTime">1hour</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div onClick={() => setOpen((prev) => !prev)}>☺️</div>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
