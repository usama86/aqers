import PropTypes from "prop-types";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImageComponent from "components/Base/ImageComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { CardActionArea } from "@mui/material";
import { styles } from "./style";
import BoxComponent from "components/Base/BoxComponent";
import DropDownComponent from "components/Base/DropDownComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import LinkComponent from "components/Base/LinkComponent";
import {
  relative_height_size_generator,
  relative_width_font_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import WideCardContent from "./WideCardContent";

export default function PropertyCard({ type, data, isWide }) {
  const propertyDetail = [
    { id: 1, source: "/Common/bed.png", value: data.bed },
    { id: 2, source: "/Common/bathtub.png", value: data.bath },
    {
      id: 3,
      source: "/Common/dimension.png",
      value: data.dimension + " " + data.unit,
    },
  ];
  return (
    <Card sx={() => styles({ isWide }).cardDiv}>
      {/* <CardActionArea> */}
      <BoxComponent sx={{ position: "relative" }}>
        <ImageComponent
          height={relative_height_size_generator(236.52)}
          width={isWide ? "100%" : relative_width_size_generator(305)}
          position="relative"
          source="/Common/test_image.png"
          objectFit={"cover"}
        />
        {data.featured && (
          <BoxComponent
            sx={{
              position: "absolute",
              top: isWide
                ? relative_width_size_generator(30)
                : relative_height_size_generator(16.94),
              left: isWide
                ? relative_width_size_generator(30)
                : relative_width_size_generator(16),
              width: relative_width_size_generator(91),
              height: relative_height_size_generator(25),
              padding: `${relative_height_size_generator(
                7
              )} ${relative_width_size_generator(14)}`,
              background: "#FFCE32",
              borderRadius: relative_width_size_generator(4),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TypographyComponent
              variant="CardFeature"
              component="p"
              sx={{
                fontSize: relative_width_font_size_generator(12),
                color: "#002F34",
                textTransform: "uppercase",
              }}
            >
              Featured
            </TypographyComponent>
          </BoxComponent>
        )}

        <BoxComponent
          sx={{
            position: "absolute",
            top: relative_height_size_generator(20),
            right: relative_width_size_generator(20),
            zIndex: 100,
          }}
        >
          {type === "drop" ? (
            <DropDownComponent
              btnProps={{
                onClick: (e) => {
                  e.stopPropagation();
                },
              }}
              iconBtn={true}
            >
              <ImageComponent
                width={relative_width_size_generator(24)}
                height={relative_width_size_generator(24)}
                source="/common/dropDownIcon.png"
              />
            </DropDownComponent>
          ) : (
            type === "like" && (
              <ImageComponent
                onClick={(e) => e.stopPropagation()}
                style={{ cursor: "pointer" }}
                width={relative_width_size_generator(42)}
                height={relative_width_size_generator(42)}
                source="/common/unlike.png"
              />
            )
          )}
        </BoxComponent>
      </BoxComponent>
      <CardContent sx={() => styles({ isWide }).cardContent}>
        {isWide ? (
          <WideCardContent
            isWide={isWide}
            propertyDetail={propertyDetail}
            data={data}
          />
        ) : (
          <>
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
              }}
            >
              {data.title}
            </TypographyComponent>
            {/* proeprty detail */}
            <BoxComponent sx={() => styles({ isWide }).iconBox}>
              {propertyDetail.map((data) => (
                <BoxComponent
                  sx={() => styles({ isWide }).iconTextBox}
                  key={data.id}
                >
                  <ImageComponent
                    height={relative_height_size_generator(24)}
                    width={relative_width_size_generator(24)}
                    position="relative"
                    source={data.source}
                  />
                  <TypographyComponent
                    sx={{
                      fontSize: relative_width_font_size_generator(16),
                      color: "#6D737A",
                    }}
                    variant="CardText"
                    component="p"
                  >
                    {data.value}
                  </TypographyComponent>
                </BoxComponent>
              ))}
            </BoxComponent>
            {/* City */}
            <BoxComponent sx={() => styles({ isWide }).cityDiv}>
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
            {/* Detail View */}
            <BoxComponent sx={() => styles({ isWide }).lastSection}>
              <ButtonComponent sx={() => styles({ isWide }).buttonStyle}>
                <LinkComponent
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
                </LinkComponent>
              </ButtonComponent>

              <ImageComponent
                height={relative_width_size_generator(20)}
                width={relative_width_size_generator(20)}
                position="relative"
                source={"/Common/share.png"}
              />
              <BoxComponent sx={() => styles({ isWide }).viewSection}>
                <ImageComponent
                  height={relative_width_size_generator(20)}
                  width={relative_width_size_generator(20)}
                  position="relative"
                  source={"/Common/eye.png"}
                />
                <TypographyComponent
                  sx={{
                    fontSize: relative_width_font_size_generator(16),
                    color: "#6D737A",
                  }}
                  variant="CardText"
                  component="p"
                >
                  {data.view}
                </TypographyComponent>
              </BoxComponent>
            </BoxComponent>
          </>
        )}
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}

PropertyCard.propTypes = {
  type: PropTypes.string,
};
PropertyCard.defaultProps = {
  type: "like", // drop like
  isWide: false,

  //Sample Data
  //   id: 1,
  //   featured: true,
  //   title: " 92 ALLIUM PLACE, ORLA...",
  //   bed: "4",
  //   bath: "4",
  //   dimension: "2.096",
  //   unit: "ft",
  //   location: "New York, NY",
  //   view: "5690",
};
