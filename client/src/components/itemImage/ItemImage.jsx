import { Image } from "@imagekit/react";

const ItemImage = ({ path, alt, className, w, h, onClick }) => {
  return (
    <Image
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
