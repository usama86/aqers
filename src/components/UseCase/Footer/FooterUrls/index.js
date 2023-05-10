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
        height: "465.44px",
        display: "flex",
        backgroundColor: "primary.main",
        p: `76px ${relative_width_size_generator(
          243
        )} 0px ${relative_width_size_generator(243)}`,
        gap: "156.52px",
      }}
    >
      {/* Section 1 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          width: "367.95px",
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
          sx={{ color: "#FFFFFF", fontSize: "18px" }}
        >
          You get alot from us: Manage your application, your portfolio and
          digitize many of the processes that go with it.
        </TypographyComponent>

        <Box sx={{ display: "flex", gap: "27.31px" }}>
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
          gap: "44.95px",
          width: "367.95px",
        }}
      >
        <TypographyComponent
          variant="HomeNineScreen"
          component="span"
          sx={{ color: "#FFFFFF", fontSize: "28px" }}
        >
          Quick Links
        </TypographyComponent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20.33px",
          }}
        >
          {quickLinks.map((data) => (
            <TypographyComponent
              variant="FooterThirdScreen"
              component="span"
              sx={{ color: "#FFFFFF", fontSize: "18px" }}
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
          gap: "39.9px",
          width: "367.95px",
        }}
      >
        <TypographyComponent
          variant="HomeNineScreen"
          component="span"
          sx={{ color: "#FFFFFF", fontSize: "28px" }}
        >
          Get App
        </TypographyComponent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "22.04px",
          }}
        >
          {getApps.map((data) => (
            <ImageComponent
              source={data.imageLink}
              width={"152.86px"}
              height={"42.98px"}
              key={data.id}
            />
          ))}
        </Box>
      </Box>

      {/* Section 4 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "39.9px",
          width: "367.95px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40.89px" }}>
          {detailSection.map((data) => (
            <Box key={data.id} sx={{ display: "flex", gap: "20.71px" }}>
              <ImageComponent
                source={data.imageLink}
                width={"40px"}
                height={"40px"}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "40.89px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4.28px",
                  }}
                >
                  <TypographyComponent
                    variant="HomeNineScreen"
                    component="span"
                    sx={{ color: "#FFFFFF", fontSize: "28px" }}
                  >
                    {data.title}
                  </TypographyComponent>
                  <TypographyComponent
                    variant="FooterFourthScreen"
                    component="span"
                    sx={{ color: "#FFFFFF", fontSize: "14px" }}
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
