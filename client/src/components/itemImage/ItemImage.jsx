import { Image } from "@imagekit/react";

const ItemImage = ({ path, alt, className, w, h, url, onClick }) => {
  return (
    <Image
      urlEndpoint={url}
      src={path}
      transformation={[{ width: w, height: h }]}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
      onClick={onClick}
    />
  );
};

export default ItemImage;
