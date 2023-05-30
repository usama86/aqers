import React from "react";
import BoxComponent from "components/Base/BoxComponent";
import Header from "./HeaderProfile";
import { styles } from "./style";
import DividerComponent from "components/Base/DividerComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import Table from "./Table";
import { relative_width_font_size_generator } from "utils/helpers";

const Booking = () => {
  return (
    <BoxComponent sx={styles.pageStyle}>
      <BoxComponent sx={styles.paddingStyle}>
        <Header />
        <DividerComponent sx={styles.dividerStyle} />

        <BoxComponent sx={{ pt: "40px" }}>
          <TypographyComponent
            sx={{
              fontSize: relative_width_font_size_generator(44),
              color: "#1D3444",
            }}
            variant="Booking"
            component="h1"
          >
            My Bookings
          </TypographyComponent>
        </BoxComponent>
        <BoxComponent sx={{ pt: "10px", width: "100%", height: "100%" }}>
          <Table />
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

export default Booking;
