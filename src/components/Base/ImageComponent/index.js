import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { CustomBox } from "./style";

export default function ImageComponent({
  source,
  width,
  height,
  alt,
  position,
  autoHeight,
  overflow,
  objectFit,
  imageClassName,
  sizes,
  priority,
  imageStyle,
  containerStyle,
  imageSxStyle,
  ...otherProps
}) {
  return (
    <CustomBox
      style={{ ...containerStyle }}
      position={position}
      overflow={overflow}
      width={width}
      height={height}
      sx={imageSxStyle}
      {...otherProps}
    >
      <Image
        src={source}
        alt={alt}
        fill={true}
        style={{ objectFit: objectFit, ...imageStyle }}
        className={imageClassName}
        sizes={sizes}
        priority={priority}
        {...otherProps}
      />
    </CustomBox>
  );
}

ImageComponent.propTypes = {
  source: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
  objectFit: PropTypes.string,
  imageClassName: PropTypes.string,
  position: PropTypes.string,
  overflow: PropTypes.string,
  imageStyle: PropTypes.object,
  imageSxStyle: PropTypes.object,
};
ImageComponent.defaultProps = {
  source: "",
  width: "100%",
  height: "100%",
  alt: "image",
  objectFit: "contain",
  position: "relative",
  overflow: "hidden",
  imageClassName: "",
  sizes: "33vw",
  imageStyle: {},
  imageSxStyle: {},
};
