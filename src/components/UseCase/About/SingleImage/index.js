import styled from "@emotion/styled";
import BoxComponent from "components/Base/BoxComponent";
import ImageComponent from "components/Base/ImageComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const RightImgContainer = styled(BoxComponent)(({ theme }) => ({
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    bottom: relative_height_size_generator(-32),
    right: relative_width_size_generator(-32),
    width: relative_width_size_generator(284),
    height: relative_height_size_generator(289),
    zIndex: "10000",
    borderRadius: "20px",
    backgroundColor: "#92198C",
    mixBlendMode: "multiply",
  },
}));

const SingleImage = () => {
  return (
    <StackCompoent
      alignItems="center"
      spacing={relative_width_size_generator(78)}
    >
      <StackCompoent
        direction="column"
        spacing={relative_height_size_generator(32)}
      >
        <TypographyComponent component="h1" variant="AboutSingleImageHeading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit,
        </TypographyComponent>
        <TypographyComponent component="p" variant="ContactBody">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </TypographyComponent>
      </StackCompoent>
      <BoxComponent>
        <RightImgContainer>
          <ImageComponent
            source="/About/Image.png"
            width={relative_width_size_generator(620)}
            height={relative_height_size_generator(667)}
            objectFit="cover"
            sx={{ borderRadius: "20px" }}
          />
        </RightImgContainer>
      </BoxComponent>
    </StackCompoent>
  );
};

export default SingleImage;
