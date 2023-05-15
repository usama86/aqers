import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export default function ThirdSecion() {
  return (
    <Box
      sx={{
        height: relative_height_size_generator(938),
        display: "flex",
        background: "#F9F9FD",
        p: `${relative_height_size_generator(
          110
        )} ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
      }}
    >
      <Box
        sx={{
          height: relative_height_size_generator(938),
          width: "100%",
          flexWrap: "wrap",
          display: "flex",
          gap: {
            ms: relative_width_size_generator(40),
            xs: relative_width_size_generator(20),
          },
          flexDirection: "column",
        }}
      >
        {ImagesBox.map((data) => (
          <Box
            key={data.id}
            sx={{
              height: relative_height_size_generator(300),
              width: relative_width_size_generator(270),
              borderRadius: relative_width_size_generator(20),
              padding: relative_width_size_generator(28),
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              gap: relative_height_size_generator(20),
              alignItems: "center",
              justifyContent: "center",
              mt: data.id === 1 ? relative_height_size_generator(50) : "0px",
            }}
          >
            <TypographyComponent
              variant="HomeSecondSection"
              component="h2"
              sx={{
                fontSize: relative_width_size_generator(56),
                color: data.color,
              }}
            >
              {data.heading}
            </TypographyComponent>
            <TypographyComponent
              variant="HomeThirdSection"
              component="span"
              sx={{ fontSize: relative_width_size_generator(18) }}
            >
              {data.content}
            </TypographyComponent>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          height: relative_height_size_generator(938),
          // flexWrap: "wrap",
          display: "flex",
          gap: relative_width_size_generator(35),
          flexDirection: "column",
          p: `${relative_height_size_generator(78)} 0px`,
        }}
        className="hello"
      >
        <Box>
          <TypographyComponent
            sx={{ fontSize: relative_width_size_generator(56) }}
            variant="HomeSecondSection"
            component="h2"
          >
            Customer satisfaction is our first priority
          </TypographyComponent>
        </Box>
        <Box>
          <TypographyComponent
            variant="HomeThirdSection"
            sx={{ fontSize: relative_width_size_generator(18) }}
            component="span"
          >
            We serve many customers, ranging from small businesses, medium
            entrepreneurs, to world-renowned companies. Their satisfaction is
            our pleasure. We strive to provide the best service by:
          </TypographyComponent>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: relative_height_size_generator(16),
            flexDirection: "column",
          }}
        >
          {TextBox.map((data) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: relative_width_size_generator(24),
              }}
              key={data.id}
            >
              <ImageComponent
                source={"/HomePage/Tick_Icon.png"}
                width={relative_width_size_generator(24)}
                height={relative_width_size_generator(24)}
              />
              <TypographyComponent
                variant="HomeFourthSection"
                component="span"
                sx={{ fontSize: relative_width_size_generator(18) }}
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
