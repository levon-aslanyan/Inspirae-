import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import GalleryItem from "../galleryItem/galleryItem";
import "./gallery.css";

const fetchPins = async ({ pageParm }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/pins?=${pageParm}`
  );
  return res.data;
};

const Gallery = () => {
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins"],
    queryFn: fetchPins,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  if (status === "pending") return "Loading...";
  if (status === "error") return "Something went wrong...";

  console.log(data, "---");

  const allPins = data?.pages.flatMap((page) => page.pins) || [];
  return (
    <InfiniteScroll
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      dataLength={allPins.length}
      loader={<h4>Loading more pins</h4>}
      endMessage={<h3>All Posts Loades!!!</h3>}
    >
      <div className="gallery">
        {allPins.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
