import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "components/Base/ImageComponent";
import CardActions from "@mui/material/CardActions";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const placeHolder = "/images/card.png";

export default function CardComponent({
  children,
  maxWidth,
  image,
  imageWidth,
  imageHeight,
  cardStyles,
  renderCardAction,
  ...otherProps
}) {
  return (
    <Card
      sx={{
        maxWidth: maxWidth,
        boxShadow: "0px 18px 112px 0px rgba(0, 0, 0, 0.06)",
        padding: `${relative_width_size_generator(
          80.11
        )} ${relative_height_size_generator(60.47)}`,
        borderRadius: "20px",
        ...cardStyles,
      }}
      {...otherProps}
    >
      {/* <Image
        height={imageHeight}
        width={imageWidth || maxWidth}
        source={image}
        alt="green iguana"
      /> */}
      <CardContent style={{ padding: 0, height: "100%" }} {...otherProps}>
        {children}
      </CardContent>

      {renderCardAction && <CardActions>{renderCardAction}</CardActions>}
    </Card>
  );
}
CardComponent.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  maxWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
};
CardComponent.defaultProps = {
  children: <></>,
  image: placeHolder,
  maxWidth: "345px",
  imageHeight: "140px",
  imageWidth: "345px",
  cardStyles: {},
};
