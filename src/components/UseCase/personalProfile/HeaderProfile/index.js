import React from "react";
import BoxComponent from "components/Base/BoxComponent";
import Avatar from "@mui/material/Avatar";
import TypographyComponent from "components/Base/TypographyComponent";
import ImageComponent from "components/Base/ImageComponent";
import { styles } from "../style";

const HeaderProfile = () => {
  return (
    <BoxComponent sx={styles.headerStyle}>
      <BoxComponent sx={styles.avatarDiv}>
        <Avatar
          sx={styles.avatarStyle}
          alt="Aqers Avatar"
          //   src="/broken-image.jpg"
        >
          B
        </Avatar>
      </BoxComponent>

      <BoxComponent sx={styles.textDiv}>
        <TypographyComponent
          variant="SellSection"
          component="h1"
          sx={styles.headingsStyle}
        >
          David Doe
        </TypographyComponent>
        <TypographyComponent
          variant="SellSectionSubTitle"
          component="h2"
          sx={styles.subtitleStyle}
        >
          daviddoe@gmail.com
        </TypographyComponent>
      </BoxComponent>

      <BoxComponent sx={styles.BoxParent}>
        {HeadingButtons.map((data) => (
          <BoxComponent
            key={data.id}
            sx={{
              height: data.height,
              width: data.width,
              borderRadius: data.borderRadius,
              ...styles.innerBox,
            }}
          >
            {data.source && (
              <ImageComponent
                height="42px"
                width="42px"
                position="relative"
                source={data.source}
              />
            )}

            <TypographyComponent
              variant="SellSectionSubtitle1"
              component="p"
              sx={styles.innerHeading}
            >
              {data.heading}
            </TypographyComponent>
            <TypographyComponent
              variant="SellSectionSubtitle1"
              component="p"
              sx={styles.innerContent}
            >
              {data.content}
            </TypographyComponent>
          </BoxComponent>
        ))}
      </BoxComponent>
    </BoxComponent>
  );
};

const HeadingButtons = [
  {
    id: 1,
    heading: "34",
    content: "Sold",
    height: "128px",
    width: "97px",
    borderRadius: "130px",
  },
  {
    id: 2,
    heading: "34",
    content: "Rent",
    height: "128px",
    width: "97px",
    borderRadius: "130px",
  },
  {
    id: 3,
    heading: "89",
    content: "Properties",
    height: "158px",
    width: "178px",
    borderRadius: "20px",
    source: "/Common/profile_page_icon.png",
  },
];
export default HeaderProfile;
