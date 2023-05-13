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

export default function PropertyCard({ type }) {
  const propertyDetail = [
    { id: 1, source: "/Common/bed.png", value: "4" },
    { id: 2, source: "/Common/bathtub.png", value: "4" },
    { id: 3, source: "/Common/dimension.png", value: "2.096 ft" },
  ];
  return (
    <Card sx={styles.cardDiv}>
      <CardActionArea>
        <BoxComponent sx={{ position: "relative" }}>
          <ImageComponent
            height="236.52px"
            width="305px"
            position="relative"
            source="/Common/test_image.png"
          />
          <BoxComponent
            sx={{
              position: "absolute",
              top: "16.94px",
              left: "16px",
              width: "91px",
              height: "25px",
              padding: "7px 14px 7px 14px",
              background: "#FFCE32",
              borderRadius: "4px",
            }}
          >
            <TypographyComponent
              variant="CardFeature"
              component="p"
              sx={{ fontSize: "12px", color: "#002F34" }}
            >
              Featured
            </TypographyComponent>
          </BoxComponent>

          <BoxComponent
            sx={{
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
          >
            {type === "drop" ? (
              <DropDownComponent iconBtn={true}>
                <ImageComponent
                  width={"24px"}
                  height={"24px"}
                  source="/common/dropDownIcon.png"
                />
              </DropDownComponent>
            ) : (
              type === "like" && (
                <ImageComponent
                  width={"42px"}
                  height={"42px"}
                  source="/common/unlike.png"
                />
              )
            )}
          </BoxComponent>
        </BoxComponent>
        <CardContent sx={styles.cardContent}>
          {/* Heading */}
          <TypographyComponent
            variant="CardTitle"
            component="p"
            sx={{ fontSize: "18px" }}
          >
            92 ALLIUM PLACE, ORLA...
          </TypographyComponent>
          {/* proeprty detail */}
          <BoxComponent sx={styles.iconBox}>
            {propertyDetail.map((data) => (
              <BoxComponent sx={styles.iconTextBox} key={data.id}>
                <ImageComponent
                  height="24px"
                  width="24px"
                  position="relative"
                  source={data.source}
                />
                <TypographyComponent
                  sx={{
                    fontSize: "16px",
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
          <BoxComponent sx={styles.cityDiv}>
            <ImageComponent
              height="24px"
              width="24px"
              position="relative"
              source={"/Common/location.png"}
            />
            <TypographyComponent
              sx={{
                fontSize: "14px",
                color: "#121212",
              }}
              variant="CardCityText"
              component="p"
            >
              New York, NY
            </TypographyComponent>
          </BoxComponent>
          {/* Detail View */}
          <BoxComponent sx={styles.lastSection}>
            <BoxComponent sx={styles.buttonStyle}>View Details</BoxComponent>

            <ImageComponent
              height="20px"
              width="20px"
              position="relative"
              source={"/Common/share.png"}
            />
            <BoxComponent sx={styles.viewSection}>
              <ImageComponent
                height="20px"
                width="20px"
                position="relative"
                source={"/Common/eye.png"}
              />
              <TypographyComponent
                sx={{
                  fontSize: "16px",
                  color: "#6D737A",
                }}
                variant="CardText"
                component="p"
              >
                569
              </TypographyComponent>
            </BoxComponent>
          </BoxComponent>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

PropertyCard.propTypes = {
  type: PropTypes.string,
};
PropertyCard.defaultProps = {
  type: "like", // drop like
};
