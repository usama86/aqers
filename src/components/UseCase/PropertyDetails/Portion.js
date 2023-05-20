import DividerComponent from "components/Base/DividerComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { relative_height_size_generator } from "utils/helpers";

const Portion = () => {
  return (
    <StackCompoent direction="column">
      <TypographyComponent
        sx={{ mb: relative_height_size_generator(15.21) }}
        variant="PropertyDetailsPortionHeading"
        component="h2"
      >
        Portion
      </TypographyComponent>
      <TypographyComponent
        sx={{ mb: relative_height_size_generator(55.73) }}
        variant="PropertyDetailsPortionDesc"
        component="p"
      >
        500 Squair ft
      </TypographyComponent>
      <TypographyComponent
        variant="PropertyDetailsPortionByTitle"
        component="div"
        sx={{ mb: relative_height_size_generator(22) }}
      >
        by Dream Home <span style={{ fontWeight: 400 }}>On Nov 25, 2022</span>
      </TypographyComponent>
      <DividerComponent sx={{ mb: relative_height_size_generator(22) }} />
    </StackCompoent>
  );
};

export default Portion;
