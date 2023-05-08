import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import { relative_width_size_generator } from "utils/helpers";

export default function SecondSection() {
  return (
    <Box sx={{ height: "1520px" }}>
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
      <Box sx={{ display: "flex", height: "1251.75px", pt: "64px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "37.04px",
            height: "inherit",
            flexWrap: "wrap",
          }}
        >
          {ImagesBox.map((data) => (
            <ImageComponent
              source={data.source}
              width={"450.89px"}
              height={data.height}
              key={data.id}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const ImagesBox = [
  { source: "/HomePage/Exp1.png", id: 1, height: "510.92px" },
  { source: "/HomePage/Exp2.png", id: 2, height: "702.51px" },
  { source: "/HomePage/Exp3.png", id: 3, height: "676.97px" },
  { source: "/HomePage/Exp4.png", id: 4, height: "536.46px" },
  { source: "/HomePage/Exp5.png", id: 5, height: "574.78px" },
  { source: "/HomePage/Exp6.png", id: 6, height: "638.65px" },
];
