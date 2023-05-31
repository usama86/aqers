import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import ButtonComponent from "components/Base/ButtonComponent";
import { LAPTOP_SCREEN_PADDING } from "./../../../../config";

export default function ThirdSecion({ isBackgroundLightDownloadApp }) {
  return (
    <Box
      sx={{
        height: relative_height_size_generator(720),
        display: "flex",
        backgroundColor: isBackgroundLightDownloadApp
          ? "#EDEDED"
          : "primary.main",
        p: `${relative_height_size_generator(
          70
        )} ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
        gap: relative_width_size_generator(37),
        "@media (max-width: 1700px)": {
          p: `70px ${LAPTOP_SCREEN_PADDING}`,
        },
        "@media (max-width: 1000px)": {
          // display: "none",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          height: "fit-content",
        },
      }}
    >
      <Box
        sx={{
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <ImageComponent
          imageSxStyle={{
            "@media (max-width: 1550px)": {
              width: 550,
              height: "550px",
              borderRadius: "20px",
              "& img": {
                objectFit: "cover",
              },
            },
          }}
          source={"/Footer/DownloadImage.png"}
          width={relative_width_size_generator(695)}
          height={relative_height_size_generator(580)}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: relative_height_size_generator(35),
          "@media (max-width: 1000px)": {
            alignItems: "center",
          },
        }}
      >
        <ImageComponent
          source={"/Footer/QR_Code.png"}
          width={relative_width_size_generator(187.5)}
          height={relative_width_size_generator(187.5)}
          imageStyle={{
            border: `${relative_width_size_generator(13.25)} solid #2A3249`,
            borderRadius: "14px",
            background: "#2A3249",
          }}
          imageSxStyle={{
            "@media (max-width: 1550px)": {
              width: "125px",
              height: "125px",
              "& img": {
                objectFit: "fill",
              },
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: relative_height_size_generator(32),
            "@media (max-width: 1000px)": {
              alignItems: "center",
            },
          }}
        >
          <Box>
            <TypographyComponent
              variant="HomeFifthSection"
              sx={{
                color: isBackgroundLightDownloadApp ? "000000" : "#FFFFFF",
                fontSize: relative_width_size_generator(52),
                "@media (max-width: 1550px)": {
                  fontSize: "34.67px",
                },
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
                fontSize: relative_width_size_generator(20),
                "@media (max-width: 1550px)": {
                  fontSize: "13.33px",
                },
              }}
            >
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </TypographyComponent>
          </Box>

          <Box sx={{ pt: relative_height_size_generator(19) }}>
            <ButtonComponent
              sx={{
                height: relative_height_size_generator(48),
                width: relative_width_size_generator(185),
                borderRadius: relative_width_size_generator(14),
                background: !isBackgroundLightDownloadApp && "#FFFFFF",
                color: !isBackgroundLightDownloadApp && "primary.main",
                "&:hover": {
                  background: isBackgroundLightDownloadApp
                    ? "primary.dark"
                    : "#efefef",
                },
              }}
              color="primary"
            >
              <TypographyComponent
                variant="HomeSeventhSection"
                component="span"
                sx={{
                  fontSize: relative_width_font_size_generator(18),
                  "@media (max-width: 1550px)": {
                    fontSize: "12px",
                  },
                }}
              >
                Download
              </TypographyComponent>
            </ButtonComponent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
