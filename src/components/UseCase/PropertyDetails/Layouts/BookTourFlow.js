import BoxComponent from "components/Base/BoxComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const BookTourFlow = ({
  heading,
  children,
  finalStateBtnLabel,
  currentPage,
  maxPage,
  nextPageHandler,
  isDisabledNextBtn,
}) => {
  return (
    <StackCompoent
      direction="column"
      sx={{
        p: `${relative_height_size_generator(
          60
        )} ${relative_width_size_generator(140)}`,
      }}
    >
      <TypographyComponent
        sx={{ textAlign: "center" }}
        variant="BookTourLaterModelsTitle"
        component="h1"
      >
        {heading}
      </TypographyComponent>
      <BoxComponent sx={{ p: 0 }}>{children}</BoxComponent>
      <ButtonComponent
        onClick={() => nextPageHandler()}
        color="primary"
        sx={{
          borderRadius: relative_width_size_generator(14),
          textTransform: "capitalize",
          mb: relative_height_size_generator(40),
        }}
        disabled={isDisabledNextBtn}
      >
        {currentPage === maxPage ? finalStateBtnLabel : "Next"}
      </ButtonComponent>
      <StackCompoent
        sx={{
          alignitems: "center",
          justifyContent: "center",
          gap: relative_width_size_generator(18),
        }}
      >
        {[1, 2, 3, 4].map((eachNumber) => {
          return (
            <BoxComponent
              sx={{
                height: relative_width_size_generator(20),
                width: relative_width_size_generator(20),
                backgroundColor:
                  eachNumber === currentPage
                    ? "rgba(42, 50, 73, 1)"
                    : "rgba(194, 201, 209, 1)",
                borderRadius: "50%",
              }}
              key={eachNumber}
            >
              &nbsp;
            </BoxComponent>
          );
        })}
      </StackCompoent>
    </StackCompoent>
  );
};

BookTourFlow.defaultProps = {
  heading: "Book a Tour",
  finalStateBtnLabel: "Book",
  nextPageHandler: (e) => {
    return;
  },
  isDisabledNextBtn: false,
};

export default BookTourFlow;
