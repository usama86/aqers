import React, { useState } from "react";
import dynamic from "next/dynamic";
import BoxComponent from "components/Base/BoxComponent";
import Avatar from "@mui/material/Avatar";
import TypographyComponent from "components/Base/TypographyComponent";
import ImageComponent from "components/Base/ImageComponent";

import { styles } from "./../style";
import DividerComponent from "components/Base/DividerComponent";

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
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="line"
          height={350}
        />
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
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="line"
          height={350}
        />
      </BoxComponent>
    </BoxComponent>
  );
};

export default GraphsPage;

const chartState = {
  series: [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
    },
    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), "dd MMM");
        },
      },
    },
    // title: {
    //   text: "",
    //   align: "left",
    //   style: {
    //     fontSize: "16px",
    //     color: "#666",
    //   },
    // },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: {
      min: -10,
      max: 40,
    },
  },
};
