import BoxComponent from "components/Base/BoxComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { infoPagesBackground } from "theme/DesignToken";
import TypographyComponent from "components/Base/TypographyComponent";

const InfoPagesLayout = ({ heading, children, fullWidth }) => {
  return (
    <div style={{ background: "#F5F5F5" }}>
      <BoxComponent
        sx={{
          height: relative_height_size_generator(400),
          background: infoPagesBackground,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        component="section"
      >
        <TypographyComponent
          sx={{
            "@media (max-width: 1000px)": {
              textAlign: "center",
            },
          }}
          variant="InfoPageHeading"
          component="h1"
        >
          {heading}
        </TypographyComponent>
      </BoxComponent>
      <BoxComponent
        component="section"
        sx={{
          width: fullWidth ? "auto" : relative_width_size_generator(1434),
          margin: `${relative_height_size_generator(100)} auto`,
        }}
      >
        {children}
      </BoxComponent>
    </div>
  );
};

InfoPagesLayout.defaultProps = {
  heading: "No heading provided",
  fullWidth: false,
};

export default InfoPagesLayout;
