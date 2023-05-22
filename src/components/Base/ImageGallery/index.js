import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { DEFAULT_IMAGES } from "./default_data";

const ImageGalleryComponent = ({ images, containerStyles, ...otherProps }) => {
  return (
    <div style={containerStyles}> <ImageGallery items={images} /> </div>
  );
};
ImageGalleryComponent.defaultProps = {
  images: DEFAULT_IMAGES,
};
export default ImageGalleryComponent;
