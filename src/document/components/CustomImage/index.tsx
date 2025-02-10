import React from "react";

type CustomImageProps = {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
};

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt = "Image",
  width = "auto",
  height = "auto",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rgx-custom-image-rounded-lg ${className}`}
    />
  );
};

export default CustomImage;
