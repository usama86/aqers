import PropTypes from "prop-types";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const CategoryBox = ({
  onSelectionChange,
  selectedCategoryId,
  identification,
  label,
  indentation,
  number,
  ...props
}) => {
  return (
    <BoxComponent
      onClick={(e) => {
        onSelectionChange(identification);
      }}
      {...props}
      sx={{
        cursor: "pointer",
        pl: `${relative_width_size_generator(indentation * 16)}`,
        mb: relative_height_size_generator(20),
      }}
    >
      <TypographyComponent
        variant={
          selectedCategoryId === identification
            ? "FilterLabelSelected"
            : "FilterLabelUnselected"
        }
        component="body2"
      >
        {label}
      </TypographyComponent>{" "}
      {number ? (
        <TypographyComponent
          variant={"FilterLabelUnselected"}
          component="body2"
        >
          {`(${number})`}
        </TypographyComponent>
      ) : null}
    </BoxComponent>
  );
};

CategoryBox.propTypes = {
  identification: PropTypes.any,
  indentation: PropTypes.oneOf([1, 2, 3]),
  label: PropTypes.string,
  number: PropTypes.number,
  onSelectionChange: PropTypes.func,
  selectedCategoryId: PropTypes.string,
};

CategoryBox.defaultProps = {
  onSelectionChange: (e) => {
    return;
  },
  selectedCategoryId: "",
  label: "no label given",
  indentation: 1,
};

export default CategoryBox;
