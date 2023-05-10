import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import { relative_width_size_generator } from "utils/helpers";
import ButtonComponent from "components/Base/ButtonComponent";

export default function AboutUs() {
  return (
    <Box
      sx={{
        height: "748px",
        display: "flex",
        backgroundColor: "#F5F5F5",
        p: `113px ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
        gap: "81.8px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "35px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box sx={{ pt: "38px" }}>
            <TypographyComponent
              variant="HomeEightSection"
              sx={{ color: "#111029", fontSize: "56px" }}
              component="h2"
            >
              About Us
            </TypographyComponent>
          </Box>

          <Box>
            <TypographyComponent
              variant="HomeNineScreen"
              component="span"
              sx={{ color: "#646464", fontSize: "26px" }}
            >
              Together we are programmers, real estate experts, designers,
              marketers, technologists, friends and partners who have set out to
              make the real estate industry better for all of us. We are the
              people behind the breby platform, pursuing one goal every day:
              Simplifying the real estate world with digitalisation.
            </TypographyComponent>
          </Box>

          <Box sx={{ pt: "19px" }}>
            <ButtonComponent
              sx={{
                height: "48px",
                width: "185px",
                borderRadius: "14px",
                background: "#FFFFFF",
                color: "primary.main",
              }}
            >
              <TypographyComponent
                variant="HomeSeventhSection"
                component="span"
                sx={{
                  fontSize: "18px",
                }}
              ></TypographyComponent>
              Contact Agent
            </ButtonComponent>
          </Box>
        </Box>
      </Box>
      <Box>
        <ImageComponent
          source={"/Footer/pool.png"}
          width={"719.43px"}
          height={"521.73px"}
        />
      </Box>
    </Box>
  );
}
