import ItemImage from "../../components/itemImage/ItemImage";
import Comments from "../../components/comments/comments";
import PostInteraction from "../../components/postInteraction/postInteraction";
import { Link } from "react-router";
import "./postPage.css";

const PostPage = () => {
  return (
    <div className="postPage">
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>

      <div className="postContainer">
        <div className="postImg">
          <ItemImage path="pins/pin1.jpeg" alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteraction />
          <Link to="/john" className="userPost">
            <ItemImage path="general/noAvatar.png" />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
