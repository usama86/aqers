import BoxComponent from "components/Base/BoxComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import { relative_height_size_generator } from "utils/helpers";

const EachAchievement = ({ amount, title, text }) => {
  return (
    <StackCompoent
      direction="column"
      spacing={relative_height_size_generator(16)}
    >
      <TypographyComponent
        component="h3"
        variant="AboutAchievements"
        color="primary.main"
      >
        {amount}
      </TypographyComponent>
      <TypographyComponent component="h4" variant="AboutAchievementsHeading">
        {title}
      </TypographyComponent>
      <TypographyComponent component="p" variant="AboutAchievementsText">
        {text}
      </TypographyComponent>
    </StackCompoent>
  );
};

export default EachAchievement;
