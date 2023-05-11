import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import TeamMember from "./TeamMember";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const OUR_TEAM = [
  {
    id: 0,
    image_source: "/About/our-team/Image 1.png",
    role: "",
    name: "",
    description: "",
  },
  {
    id: 0,
    image_source: "/About/our-team/Image 2.png",
    role: "",
    name: "",
    description: "",
  },
  {
    id: 0,
    image_source: "/About/our-team/Image 3.png",
    role: "",
    name: "",
    description: "",
  },
  {
    id: 0,
    image_source: "/About/our-team/Image 4.png",
    role: "Support Assist",
    name: "Selby Stuart",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.",
  },
];

const OurTeam = () => {
  return (
    <StackCompoent direction="column">
      <TypographyComponent
        component="h1"
        sx={{
          mb: relative_height_size_generator(27),
          width: relative_width_size_generator(577),
        }}
        variant="AboutSingleImageHeading"
      >
        Lorem ipsum dolor sit amet, consectetur
      </TypographyComponent>
      <TypographyComponent
        sx={{
          mb: relative_height_size_generator(64),
          width: relative_width_size_generator(721),
        }}
        variant="ContactBody"
        component="p"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo
        suscipit tellus et pellentesque.
      </TypographyComponent>
      <StackCompoent
        spacing={relative_width_size_generator(41)}
        justifyContent="space-between"
      >
        {OUR_TEAM.map((eachMember) => (
          <TeamMember key={eachMember.id} {...eachMember} />
        ))}
      </StackCompoent>
    </StackCompoent>
  );
};

export default OurTeam;
