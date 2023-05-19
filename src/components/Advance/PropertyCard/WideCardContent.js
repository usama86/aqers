import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { styles } from "./style";
import ImageComponent from "components/Base/ImageComponent";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import ButtonComponent from "components/Base/ButtonComponent";
import LinkComponent from "components/Base/LinkComponent";
import StackCompoent from "components/Base/StackCompoent";
import { getDesignSystem } from "theme/DesignToken";

const WideCardContent = ({ isWide, data, propertyDetail, ...otherProps }) => {
  return (
    <>
      <StackCompoent alignItems="center">
        {/* Heading */}
        <TypographyComponent
          variant="CardTitle"
          component="p"
          sx={{
            fontSize: relative_width_font_size_generator(18),
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: relative_width_size_generator(246),
            flexGrow: "1",
          }}
        >
          {data.title}
        </TypographyComponent>
        <ImageComponent
          style={{ cursor: "pointer" }}
          height={relative_width_size_generator(20)}
          width={relative_width_size_generator(20)}
          position="relative"
          source={"/Common/share.png"}
        />
        <BoxComponent sx={() => styles({ isWide }).viewSection}>
          <ImageComponent
            style={{ cursor: "pointer" }}
            height={relative_width_size_generator(24)}
            width={relative_width_size_generator(24.79)}
            position="relative"
            source={"/Common/eye.png"}
          />
          <TypographyComponent
            sx={{
              fontSize: relative_width_font_size_generator(16),
              color: "#6D737A",
              ml: relative_width_size_generator(6),
            }}
            variant="CardText"
            component="p"
          >
            {data.view}
          </TypographyComponent>
        </BoxComponent>
      </StackCompoent>
      {/* proeprty detail */}
      <BoxComponent sx={() => styles({ isWide }).iconBox}>
        {propertyDetail.map((eachPropertyDetail) => (
          <BoxComponent
            sx={() => styles({ isWide }).iconTextBox}
            key={eachPropertyDetail.id}
          >
            <ImageComponent
              height={relative_height_size_generator(24)}
              width={relative_width_size_generator(24)}
              position="relative"
              source={eachPropertyDetail.source}
            />
            <TypographyComponent
              sx={{
                fontSize: relative_width_font_size_generator(16),
                color: "#6D737A",
              }}
              variant="CardText"
              component="p"
            >
              {eachPropertyDetail.value}
            </TypographyComponent>
          </BoxComponent>
        ))}
      </BoxComponent>
      {/* City */}
      <StackCompoent alignItems="center">
        <BoxComponent
          sx={() => ({ ...styles({ isWide }).cityDiv, flexGrow: 1 })}
        >
          <ImageComponent
            height={relative_width_size_generator(24)}
            width={relative_width_size_generator(24)}
            position="relative"
            source={"/Common/location.png"}
          />
          <TypographyComponent
            sx={{
              fontSize: relative_width_font_size_generator(14),
              color: "#121212",
            }}
            variant="CardCityText"
            component="p"
          >
            {data.location}
          </TypographyComponent>
        </BoxComponent>
        <StackCompoent
          sx={{ gap: relative_width_size_generator(13) }}
          alignItems="center"
        >
          <ImageComponent
            width={relative_width_size_generator(17)}
            height={relative_width_size_generator(17)}
            source="/Common/dollar.png"
          />
          <TypographyComponent
            component="span"
            sx={{ ...getDesignSystem(700, 14, 16.94), color: "#92198C" }}
          >
            300$/month
          </TypographyComponent>
        </StackCompoent>
      </StackCompoent>
    </>
  );
};

export default WideCardContent;
{
  /* <LinkComponent
            linkStyle={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            href={{ pathname: "/property-details", query: { ...data } }}
          >
            View Details
          </LinkComponent> */
}
