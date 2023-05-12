import React from "react";

import BoxComponent from "components/Base/BoxComponent";

import TypographyComponent from "components/Base/TypographyComponent";
import ImageComponent from "components/Base/ImageComponent";

const MainSectionHeader = () => {
  return (
    <BoxComponent
      sx={{
        pt: "44px",
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      <BoxComponent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          flexGrow: "0.5",
        }}
      >
        <TypographyComponent
          sx={{
            fontSize: "18px",
            color: "#2A3249",
          }}
          variant="SellDownSection"
          component="p"
        >
          Referral Code
        </TypographyComponent>
        <BoxComponent
          sx={{
            height: "48px",
            width: "488px",
            borderRadius: "14px",
            background: "#FFFFFF",
            border: "1px solid #C2C9D1",
            p: "15px 14px 15px 25px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TypographyComponent
            sx={{
              fontSize: "16px",
              color: "#2A3249",
            }}
            variant="SellDownSection"
            component="p"
          >
            liucryweiojwo8eyruey7i
          </TypographyComponent>
          <ImageComponent
            source="/Common/referel-icon.png"
            height="24px"
            width="24px"
            position="relative"
          />
        </BoxComponent>
      </BoxComponent>
      <BoxComponent
        sx={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
          paddingTop: "28px",
        }}
      >
        <TypographyComponent
          sx={{
            fontSize: "50px",
            color: "#2A3249",
          }}
          variant="SellDownSection2"
          component="p"
        >
          2891
        </TypographyComponent>
        <TypographyComponent
          sx={{
            fontSize: "27px",
            color: "#696969",
          }}
          variant="SellDownSubSection2"
          component="p"
        >
          Properties listed by your referral code
        </TypographyComponent>
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
export default MainSectionHeader;
