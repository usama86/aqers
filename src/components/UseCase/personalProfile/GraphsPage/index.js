import React, { useState } from "react";
import dynamic from "next/dynamic";
import BoxComponent from "components/Base/BoxComponent";
import Avatar from "@mui/material/Avatar";
import TypographyComponent from "components/Base/TypographyComponent";
import ImageComponent from "components/Base/ImageComponent";

import { styles } from "./../style";
import DividerComponent from "components/Base/DividerComponent";
import LineChart from "components/Base/LineChart";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const GraphsPage = () => {
  return (
    <BoxComponent sx={{ display: "flex", flexDirection: "column" }}>
      <BoxComponent
        sx={{
          pt: "33px",
          height: "375px",
          width: "100%",
          background: "#FBFCFC",
          borderRadius: "20px",
        }}
        id="chart"
      >
        <LineChart />
      </BoxComponent>
      <BoxComponent
        sx={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
          paddingTop: "28px",
        }}
      >
        <TypographyComponent
          sx={{
            fontSize: "50px",
            color: "primary.main",
            "@media (max-width:500px)": {
              fontSize: `${(50 * 2) / 3}px`,
            },
          }}
          variant="SellDownSection2"
          component="p"
        >
          2891
        </TypographyComponent>
        <TypographyComponent
          sx={{
            fontSize: "27px",
            color: "#696969",
            "@media (max-width:500px)": {
              fontSize: `${(27 * 2) / 3}px`,
            },
          }}
          variant="SellDownSubSection2"
          component="p"
        >
          Properties views in this month
        </TypographyComponent>
      </BoxComponent>
      <BoxComponent
        sx={{
          pt: "12px",
          height: "375px",
          width: "100%",
          background: "#FBFCFC",
          borderRadius: "20px",
        }}
        id="chart"
      >
        <LineChart />
      </BoxComponent>
    </BoxComponent>
  );
};

export default GraphsPage;
