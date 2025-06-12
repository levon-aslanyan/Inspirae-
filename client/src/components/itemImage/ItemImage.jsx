import { Image } from "@imagekit/react";
import { lazy } from "react";

const ItemImage = ({ path, alt, classname, w, h, url }) => {
  return (
    <Image
      urlEndpoint={url}
      src={path}
      transformation={[{ width: w, height: h }]}
      loading={lazy}
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      classname={classname}
    />
  );
};

export default ItemImage;
