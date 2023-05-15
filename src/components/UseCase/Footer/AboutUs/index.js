import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import ButtonComponent from "components/Base/ButtonComponent";
import LinkComponent from "components/Base/LinkComponent";

export default function AboutUs() {
  return (
    <Box
      sx={{
        height: relative_height_size_generator(748),
        display: "flex",
        backgroundColor: "#F5F5F5",
        p: `${relative_height_size_generator(
          113
        )} ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
        gap: relative_width_size_generator(81.8),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: relative_height_size_generator(35),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: relative_height_size_generator(20),
          }}
        >
          <Box sx={{ pt: relative_height_size_generator(38) }}>
            <TypographyComponent
              variant="HomeEightSection"
              sx={{
                color: "#111029",
                fontSize: relative_width_size_generator(56),
              }}
              component="h2"
            >
              About Us
            </TypographyComponent>
          </Box>

          <Box>
            <TypographyComponent
              variant="HomeNineScreen"
              component="span"
              sx={{
                color: "#646464",
                fontSize: relative_width_size_generator(26),
              }}
            >
              Together we are programmers, real estate experts, designers,
              marketers, technologists, friends and partners who have set out to
              make the real estate industry better for all of us. We are the
              people behind the breby platform, pursuing one goal every day:
              Simplifying the real estate world with digitalisation.
            </TypographyComponent>
          </Box>

          <Box sx={{ pt: relative_height_size_generator(19) }}>
            <ButtonComponent
              sx={{
                height: relative_height_size_generator(48),
                width: relative_width_size_generator(185),
                borderRadius: relative_width_size_generator(14),
                background: "#FFFFFF",
                color: "primary.main",
                "&:hover": {
                  background: "#efefef",
                },
              }}
            >
              <LinkComponent
                linkStyle={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                href="/agent-listing"
              >
                <TypographyComponent
                  variant="HomeSeventhSection"
                  component="span"
                  sx={{
                    fontSize: relative_width_size_generator(18),
                  }}
                >
                  Contact Agent
                </TypographyComponent>
              </LinkComponent>
            </ButtonComponent>
          </Box>
        </Box>
      </Box>
      <Box>
        <ImageComponent
          source={"/Footer/pool.png"}
          width={relative_width_size_generator(719.43)}
          height={relative_height_size_generator(521.73)}
        />
      </Box>
    </Box>
  );
}
