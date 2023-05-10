import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import { relative_width_size_generator } from "utils/helpers";

export default function ThirdSecion() {
  return (
    <Box
      sx={{
        height: "938px",
        display: "flex",
        background: "#F9F9FD",
        p: `110px ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
      }}
    >
      <Box
        sx={{
          height: "938px",
          minWidth: "660px",
          flexWrap: "wrap",
          display: "flex",
          gap: "40px",
          flexDirection: "column",
        }}
      >
        {ImagesBox.map((data) => (
          <Box
            key={data.id}
            sx={{
              height: "300px",
              width: "270px",
              borderRadius: "20px",
              padding: "28px",
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
              mt: data.id === 1 ? "50px" : "0px",
            }}
          >
            <TypographyComponent
              variant="HomeSecondSection"
              component="h2"
              sx={{ fontSize: "56px", color: data.color }}
            >
              {data.heading}
            </TypographyComponent>
            <TypographyComponent
              variant="HomeThirdSection"
              component="span"
              sx={{ fontSize: "18px" }}
            >
              {data.content}
            </TypographyComponent>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          height: "938px",
          flexWrap: "wrap",
          display: "flex",
          gap: "35px",
          flexDirection: "column",
          p: "78px 0px 78px 0px",
        }}
        className="hello"
      >
        <Box>
          <TypographyComponent
            sx={{ fontSize: "56px" }}
            variant="HomeSecondSection"
            component="h2"
          >
            Customer satisfaction is our first priority
          </TypographyComponent>
        </Box>
        <Box>
          <TypographyComponent
            variant="HomeThirdSection"
            sx={{ fontSize: "18px" }}
            component="span"
          >
            We serve many customers, ranging from small businesses, medium
            entrepreneurs, to world-renowned companies. Their satisfaction is
            our pleasure. We strive to provide the best service by:
          </TypographyComponent>
        </Box>
        <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          {TextBox.map((data) => (
            <Box
              sx={{ display: "flex", alignItems: "center", gap: "24px" }}
              key={data.id}
            >
              <ImageComponent
                source={"/HomePage/Tick_Icon.png"}
                width={"24px"}
                height={"24px"}
              />
              <TypographyComponent
                variant="HomeFourthSection"
                component="span"
                sx={{ fontSize: "18px" }}
              >
                {data.content}
              </TypographyComponent>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
const ImagesBox = [
  {
    heading: "70K+",
    id: 1,
    color: "#92198C",
    content: "We have more than customers",
  },
  {
    heading: "10M+",
    id: 2,
    color: "#FF2D59",
    content: "People who are helped because of our hard work",
  },
  {
    heading: "100+",
    id: 3,
    color: "#FF6800",
    content: "Properties we have we have for Sell/Rent",
  },
  {
    heading: "200+",
    id: 4,
    color: "#4ADB61",
    content: "We have more than customers",
  },
];

const TextBox = [
  {
    id: 1,
    content: "Provide idea support from our creative team",
  },
  {
    id: 2,
    content: "Provide attractive and professional design services",
  },
  {
    id: 3,
    content: "Support for service 24 hours a week",
  },
  {
    id: 4,
    content: "Helping our customers to grow their business",
  },
  {
    id: 5,
    content: "Provide support to market products through online marketplace ",
  },
];
