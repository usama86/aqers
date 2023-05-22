import BoxComponent from "components/Base/BoxComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import DropDownComponent from "components/Base/DropDownComponent";
import ImageComponent from "components/Base/ImageComponent";
import { getDesignSystem } from "theme/DesignToken";
import DividerComponent from "components/Base/DividerComponent";
import PieChart from "components/Base/PieChart";

const Statistics = () => {
  return (
    <BoxComponent
      sx={{
        boxShadow: `0 2px 6px rgba(13, 10, 44, 0.08)`,
        borderRadius: relative_width_size_generator(20),
        p: `${relative_height_size_generator(
          34.7
        )} ${relative_width_size_generator(35.88)}`,
      }}
    >
      <StackCompoent direction="column">
        <StackCompoent sx={{ mb: relative_height_size_generator(26.22) }}>
          <StackCompoent sx={{ flexGrow: 1 }} direction="column">
            <TypographyComponent
              sx={{
                color: "rgba(146, 145, 165, 1)",
                mb: relative_height_size_generator(4),
              }}
              variant="PropertyDetailsMortgageCalculatorStatisticsHeading"
            >
              Statistics
            </TypographyComponent>
            <TypographyComponent variant="PropertyDetailsMortgageCalculatorStatisticsTitle">
              Views by Country
            </TypographyComponent>
          </StackCompoent>
          <DropDownComponent
            containerStyles={{
              backgroundColor: "rgba(248, 248, 255, 1)",
              borderRadius: relative_width_size_generator(20),
              width: relative_width_size_generator(107),
              height: relative_height_size_generator(39.04),
              "& .MuiButtonBase-root": {
                width: "100% !important",
                minWidth: "auto",
                height: "100% !important",
                pl: relative_width_size_generator(18.32),
                pr: relative_width_size_generator(16.53),
              },
              "& .MuiButtonBase-root:hover": {
                backgroundColor: "rgba(248, 248, 255, 1)",
              },
            }}
            transparent={true}
          >
            <span
              style={{
                color: "rgba(97, 94, 131, 1)",
                ...getDesignSystem(400, 14, 16),
              }}
            >
              Share{" "}
            </span>
            <ImageComponent
              source="/Common/dropdown.png"
              width={relative_width_size_generator(9.68)}
              height={relative_height_size_generator(5.46)}
            />
          </DropDownComponent>
        </StackCompoent>
        <DividerComponent />
        <PieChart
          width="100%"
          // width={relative_width_size_generator(480)}
          // height={relative_height_size_generator(176.28)}
        />
      </StackCompoent>
    </BoxComponent>
  );
};

export default Statistics;
