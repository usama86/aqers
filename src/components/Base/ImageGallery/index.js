import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { DEFAULT_IMAGES } from "./default_data";
import BoxComponent from "../BoxComponent";
import styled from "@emotion/styled";
import { relative_width_size_generator } from "utils/helpers";

const Wrapper = styled(BoxComponent)(({ theme }) => ({
  // "& .image-gallery-slide-wrapper": {
  //   backgroundColor: "black",
  // },
  // "& .image-gallery-swipe": {
  //   width: "90%",
  //   margin: "0 auto",
  // },
  // "& .image-gallery-svg": {
  //   width: relative_width_size_generator(46.94),
  // },
}));

const ImageGalleryComponent = ({ images, containerStyles, ...otherProps }) => {
  return (
    <Wrapper style={{ ...containerStyles }}>
      <ImageGallery items={images} {...otherProps} />
    </Wrapper>
  );
};
ImageGalleryComponent.defaultProps = {
  images: DEFAULT_IMAGES,
};
export default ImageGalleryComponent;
