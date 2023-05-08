import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import { relative_width_size_generator } from "utils/helpers";

export default function ThirdSecion() {
  return <Box sx={{ height: "938px" }}>Hello</Box>;
}

const ImagesBox = [
  {
    Number: "70K+",
    id: 1,
    color: "#92198C",
    content: "We have more than customers",
  },
  {
    Number: "10M+",
    id: 1,
    color: "#FF2D59",
    content: "People who are helped because of our hard work",
  },
  {
    Number: "100+",
    id: 1,
    color: "#FF6800",
    content: "Properties we have we have for Sell/Rent",
  },
  {
    Number: "200+",
    id: 1,
    color: "#4ADB61",
    content: "We have more than customers",
  },
];
