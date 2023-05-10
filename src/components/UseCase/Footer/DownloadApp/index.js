import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import { relative_width_size_generator } from "utils/helpers";
import ButtonComponent from "components/Base/ButtonComponent";

export default function ThirdSecion({ isBackgroundLightDownloadApp }) {
  return (
    <Box
      sx={{
        height: "720px",
        display: "flex",
        backgroundColor: isBackgroundLightDownloadApp
          ? "#EDEDED"
          : "primary.main",
        p: `70px ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
        gap: "37px",
      }}
    >
      <Box>
        <ImageComponent
          source={"/Footer/DownloadImage.png"}
          width={"695px"}
          height={"580px"}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "35px" }}>
        <ImageComponent
          source={"/Footer/QR_Code.png"}
          width={"187.5px"}
          height={"187.5px"}
          imageStyle={{
            border: "13.25px solid #2A3249",
            borderRadius: "14px",
            background: "#2A3249",
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <Box>
            <TypographyComponent
              variant="HomeFifthSection"
              sx={{
                color: isBackgroundLightDownloadApp ? "000000" : "#FFFFFF",
                fontSize: "52px",
              }}
              component="h2"
            >
              Get The App For Better Experience
            </TypographyComponent>
          </Box>

          <Box>
            <TypographyComponent
              variant="HomeSixthSection"
              component="span"
              sx={{
                color: isBackgroundLightDownloadApp ? "000000" : "#EDEFF6",
                fontSize: "20px",
              }}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </TypographyComponent>
          </Box>

          <Box sx={{ pt: "19px" }}>
            <ButtonComponent
              sx={{
                height: "48px",
                width: "185px",
                borderRadius: "14px",
                background: !isBackgroundLightDownloadApp && "#FFFFFF",
                color: !isBackgroundLightDownloadApp && "primary.main",
              }}
              color="primary"
            >
              <TypographyComponent
                variant="HomeSeventhSection"
                component="span"
                sx={{
                  fontSize: "18px",
                }}
              ></TypographyComponent>
              Download
            </ButtonComponent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
