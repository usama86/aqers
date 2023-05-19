import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { relative_height_size_generator } from "utils/helpers";

const Description = () => {
  return (
    <StackCompoent direction="column">
      <TypographyComponent
        component="h2"
        sx={{ mb: relative_height_size_generator(22) }}
        variant="PropertyDetailsDescriptionTitle"
      >
        Description
      </TypographyComponent>
      <TypographyComponent
        component="p"
        sx={{ mb: relative_height_size_generator(61) }}
        variant="PropertyDetailsPortionDesc"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
        velit sit amet ultricies ultrices. Suspendisse eget purus augue. Etiam
        gravida eros augue, sit amet bibendum est efficitur vel. Nulla non sem
        quis leo et id risus. Sed hendrerit, enim a rutrum eleifend, ipsum eros
        convallis metus,
      </TypographyComponent>
    </StackCompoent>
  );
};

export default Description;
