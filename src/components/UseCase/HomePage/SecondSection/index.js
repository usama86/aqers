import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import styled from "@emotion/styled";
import BoxComponent from "components/Base/BoxComponent";

const ImgBox = styled(Box)(({ theme }) => ({
  "@media (max-width: 850px)": {
    flexWrap: "nowrap",
    width: "100%",
    alignItems: "center",
    "& > div": {
      width: "100%",
      height: relative_height_size_generator(510.92),
    },
  },
}));

export default function SecondSection() {
  return (
    <Box
      sx={{
        height: relative_height_size_generator(1520),
        "@media (max-width: 1000px)": {
          pt: "110px",
        },
        "@media (max-width: 850px)": {
          height: "3800px",
        },
      }}
    >
      <Box sx={{ display: "flex", flexGrow: "1", justifyContent: "center" }}>
        <TypographyComponent
          variant="HomeSecondSection"
          component="h2"
          sx={{ fontSize: relative_width_size_generator(56) }}
        >
          Proven expertise for luxury homes
        </TypographyComponent>
      </Box>

      {/* Images Box */}
      <Box
        sx={{
          display: "flex",
          height: relative_height_size_generator(1251.75),
          pt: relative_height_size_generator(64),
        }}
      >
        <ImgBox
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: relative_height_size_generator(37.04),
            width: "100%",
            height: "inherit",
            flexWrap: "wrap",
          }}
        >
          {ImagesBox.map((data) => (
            <BoxComponent key={data.id}>
              <ImageComponent
                source={data.source}
                width={"100%"}
                height={data.height}
                objectFit={"cover"}
              />
            </BoxComponent>
          ))}
        </ImgBox>
      </Box>
    </Box>
  );
}

const ImagesBox = [
  {
    source: "/HomePage/Exp1.png",
    id: 1,
    height: relative_height_size_generator(510.92),
  },
  {
    source: "/HomePage/Exp2.png",
    id: 2,
    height: relative_height_size_generator(702.51),
  },
  {
    source: "/HomePage/Exp3.png",
    id: 3,
    height: relative_height_size_generator(676.97),
  },
  {
    source: "/HomePage/Exp4.png",
    id: 4,
    height: relative_height_size_generator(536.46),
  },
  {
    source: "/HomePage/Exp5.png",
    id: 5,
    height: relative_height_size_generator(574.78),
  },
  {
    source: "/HomePage/Exp6.png",
    id: 6,
    height: relative_height_size_generator(638.65),
  },
];
