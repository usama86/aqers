import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { DEFAULT_IMAGES } from "./default_data";
import BoxComponent from "../BoxComponent";

const ImageGalleryComponent = ({ images, containerStyles, ...otherProps }) => {
  return (
    <BoxComponent sx={{ ...containerStyles }}>
      <ImageGallery items={images} />
    </BoxComponent>
  );
};
ImageGalleryComponent.defaultProps = {
  images: DEFAULT_IMAGES,
};
export default ImageGalleryComponent;
