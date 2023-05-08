import BoxComponent from "components/Base/BoxComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const DownloadApp = () => {
  return (
    <BoxComponent
      component="section"
      sx={{
        backgroundColor: "primary.main",
        color: "common.white",
        display: "flex",
        justifyContent: "space-between",
        padding: `${relative_height_size_generator(
          70
        )} ${relative_width_size_generator(243)}`,
        gap: relative_width_size_generator(37),
      }}
    >
      <div style={{ flexGrow: 1, background: "green" }}>image</div>
      <div style={{ flexGrow: 1, background: "green" }}>text and content</div>
    </BoxComponent>
  );
};

export default DownloadApp;
