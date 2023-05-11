import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import EachAchievement from "./EachAchievement";
import { relative_width_size_generator } from "utils/helpers";

const STATIC_ACHIEVEMENTS = [
  {
    id: 0,
    amount: "15+",
    title: "Awards recieved",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
  },
  {
    id: 1,
    amount: "500+",
    title: "Clients served",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
  },
  {
    id: 2,
    amount: "34",
    title: "Employees",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
  },
  {
    id: 3,
    amount: "130+",
    title: "Custom Solutions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.",
  },
];

const Achievements = () => {
  return (
    <>
      <StackCompoent>
        <TypographyComponent
          sx={{ flexGrow: 1, width: "50%" }}
          component="h2"
          variant="AboutHeading2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </TypographyComponent>
        <TypographyComponent
          sx={{ flexGrow: 1, width: "50%" }}
          component="p"
          variant="ContactBody"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
          suscipit tellus et pellentesque.
        </TypographyComponent>
      </StackCompoent>
      <StackCompoent
        // spacing={relative_width_size_generator(66)}
        sx={{ width: "100%", justifyContent: "space-between" }}
      >
        {STATIC_ACHIEVEMENTS.map((eachAchievement) => (
          <EachAchievement {...eachAchievement} key={eachAchievement.id} />
        ))}
      </StackCompoent>
    </>
  );
};

export default Achievements;
