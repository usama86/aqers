import PropertyDetailsCard from "components/Advance/PropertyDetailsCard";
import ButtonComponent from "components/Base/ButtonComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React, { useState } from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { getDesignSystem } from "theme/DesignToken";
import ModalComponent from "components/Base/Modal";
import BookTour from "./Modals/BookTourController";
import useBookTour from "./hooks/useBookTour";

const btnStyles = ({ color }) => ({
  height: relative_height_size_generator(41),
  textTransform: "capitalize",
  color: color ? color : "black",
  borderColor: color ? color : "black",
  ...getDesignSystem(700, 16, 19),
});

const MAX_PAGES_WITH_0_INDEX = 4;

const BookATour = () => {
  const {
    modelState,
    selectedModel,
    currentPage,
    handleOpenOnlineModal,
    handleOpenOnSiteModal,
    handleCloseModel,
    incrementPage,
  } = useBookTour({
    maxPagesWith0Index: MAX_PAGES_WITH_0_INDEX,
  });

  return (
    <>
      <PropertyDetailsCard>
        <StackCompoent direction="column">
          <TypographyComponent
            sx={{ mb: relative_height_size_generator(15.94) }}
            variant="BookATourTitle"
          >
            Book A Tour
          </TypographyComponent>
          <TypographyComponent
            sx={{ mb: relative_height_size_generator(20) }}
            variant="BookATourText"
          >
            Book on site or online tour to view the Property
          </TypographyComponent>
          <ButtonComponent
            variant="outlined"
            fullWidth
            onClick={() => handleOpenOnSiteModal()}
            sx={{
              ...btnStyles({}),
              mb: relative_height_size_generator(20),
            }}
          >
            Book On Site
          </ButtonComponent>
          <ButtonComponent
            variant="outlined"
            fullWidth
            onClick={() => handleOpenOnlineModal()}
            sx={{
              ...btnStyles({ color: "rgba(146, 25, 140, 1)" }),
            }}
          >
            Book Online
          </ButtonComponent>
        </StackCompoent>
      </PropertyDetailsCard>
      <ModalComponent
        width={relative_width_size_generator(768)}
        handleClose={handleCloseModel}
        open={modelState}
        modelStylesOverrides={{
          "@media (max-width: 850px)": {
            width: "600px",
            "& .css-uzov0x-MuiStack-root": { padding: "10px 10px" },
          },
          "@media (max-width: 650px)": {
            "& .css-7bhki3-MuiStack-root": {
              flexDirection: "column",
              height: "200px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "0px",
            },

            "& .css-ujtyd4-MuiGrid2-root": {
              marginBottom: "0px",
            },
            "& .css-sptymy-MuiGrid2-root": {
              padding: 0,
            },
            // width: "600px",
            // "& .css-uzov0x-MuiStack-root": { padding: "10px 10px" },
          },
        }}
      >
        <BookTour
          incrementPage={incrementPage}
          selectedModel={selectedModel}
          currentPage={currentPage}
          maxPage={MAX_PAGES_WITH_0_INDEX}
        />
      </ModalComponent>
    </>
  );
};

export default BookATour;
