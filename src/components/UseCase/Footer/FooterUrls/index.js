import React, { useState } from "react";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import Box from "components/Base/BoxComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import {
  relative_width_size_generator,
  relative_height_size_generator,
} from "utils/helpers";

export default function FooterUrls() {
  return (
    <Box
      sx={{
        height: relative_height_size_generator(465.44),
        display: "flex",
        backgroundColor: "primary.main",
        p: `${relative_height_size_generator(
          76
        )} ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
        gap: relative_width_size_generator(156.52),
      }}
    >
      {/* Section 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: relative_height_size_generator(36),
          width: relative_width_size_generator(367.95),
        }}
      >
        <ImageComponent
          source="/Navbar/Aqers-Logo.png"
          width={relative_width_size_generator(69)}
          height={relative_height_size_generator(72)}
          alt="Aqers Logo"
        />
        <TypographyComponent
          variant="HomeNineScreen"
          component="span"
          sx={{ color: "#FFFFFF", fontSize: relative_width_size_generator(18) }}
        >
          You get alot from us: Manage your application, your portfolio and
          digitize many of the processes that go with it.
        </TypographyComponent>

        <Box
          sx={{ display: "flex", gap: relative_width_size_generator(27.31) }}
        >
          <ImageComponent
            source="/Footer/facebook.png"
            width={relative_width_size_generator(36)}
            height={relative_height_size_generator(36)}
            alt="Aqers Logo"
          />
          <ImageComponent
            source="/Footer/instagram.png"
            width={relative_width_size_generator(36)}
            height={relative_height_size_generator(36)}
            alt="Aqers Logo"
          />
          <ImageComponent
            source="/Footer/linkedin.png"
            width={relative_width_size_generator(36)}
            height={relative_height_size_generator(36)}
            alt="Aqers Logo"
          />
        </Box>
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: relative_height_size_generator(44.95),
          width: relative_width_size_generator(367.95),
        }}
      >
        <TypographyComponent
          variant="HomeNineScreen"
          component="span"
          sx={{ color: "#FFFFFF", fontSize: relative_width_size_generator(28) }}
        >
          Quick Links
        </TypographyComponent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: relative_height_size_generator(20.33),
          }}
        >
          {quickLinks.map((data) => (
            <TypographyComponent
              variant="FooterThirdScreen"
              component="span"
              sx={{
                color: "#FFFFFF",
                fontSize: relative_width_size_generator(18),
              }}
              key={data.id}
            >
              {data.content}
            </TypographyComponent>
          ))}
        </Box>
      </Box>

      {/* Section 3  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: relative_height_size_generator(39.9),
          width: relative_width_size_generator(367.95),
        }}
      >
        <TypographyComponent
          variant="HomeNineScreen"
          component="span"
          sx={{ color: "#FFFFFF", fontSize: relative_width_size_generator(28) }}
        >
          Get App
        </TypographyComponent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: relative_height_size_generator(22.04),
          }}
        >
          {getApps.map((data) => (
            <ImageComponent
              source={data.imageLink}
              width={relative_width_size_generator(152.86)}
              height={relative_height_size_generator(42.98)}
              key={data.id}
              sx={{ cursor: "pointer" }}
            />
          ))}
        </Box>
      </Box>

      {/* Section 4 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: relative_height_size_generator(39.9),
          width: relative_width_size_generator(367.95),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: relative_height_size_generator(40.89),
          }}
        >
          {detailSection.map((data) => (
            <Box
              key={data.id}
              sx={{
                display: "flex",
                gap: relative_width_size_generator(20.71),
              }}
            >
              <ImageComponent
                objectFit="cover"
                source={data.imageLink}
                width={relative_width_size_generator(40)}
                height={relative_width_size_generator(40)}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: relative_height_size_generator(40.89),
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: relative_height_size_generator(4.28),
                  }}
                >
                  <TypographyComponent
                    variant="HomeNineScreen"
                    component="span"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: relative_width_size_generator(28),
                    }}
                  >
                    {data.title}
                  </TypographyComponent>
                  <TypographyComponent
                    variant="FooterFourthScreen"
                    component="span"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: relative_width_size_generator(14),
                    }}
                  >
                    {data.content}
                  </TypographyComponent>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const quickLinks = [
  { id: 1, content: "FAQ’s" },
  { id: 2, content: "Privacy Policy" },
  { id: 3, content: "Terms & Conditions" },
  { id: 4, content: "Contact Us" },
];

const getApps = [
  { id: 1, imageLink: "/Footer/appstore.png" },
  { id: 2, imageLink: "/Footer/googleplay.png" },
  { id: 3, imageLink: "/Footer/appgallery.png" },
];

const detailSection = [
  {
    id: 1,
    title: "Address",
    content: " Hüttenstraße 42 40215 Düsseldorf, Germany",
    imageLink: "/Footer/location.png",
  },
  {
    id: 2,
    title: "Phone",
    content: "02 173 296 7148",
    imageLink: "/Footer/phone.png",
  },
  {
    id: 3,
    title: "Email",
    content: "info@breby.de",
    imageLink: "/Footer/email.png",
  },
];
