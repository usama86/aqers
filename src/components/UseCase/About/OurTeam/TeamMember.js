import styled from "@emotion/styled";
import BoxComponent from "components/Base/BoxComponent";
import ImageComponent from "components/Base/ImageComponent";
import StackCompoent from "components/Base/StackCompoent";
import TypographyComponent from "components/Base/TypographyComponent";
import React from "react";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
// import { motion } from "framer-motion";

const Wrapper = styled(BoxComponent)(({ theme }) => ({
  position: "relative",
  width: "100%",
}));
const Information = styled(StackCompoent)(({ theme }) => ({
  backgroundColor: "rgba(37,37,37,0.9)",
  width: "100%",
  height: relative_height_size_generator(233),
  color: "#ffffff",
  padding: `${relative_height_size_generator(
    43
  )} ${relative_width_size_generator(31)}`,
  borderRadius: "20px",
  position: "absolute",
  // bottom: `calc(0px - ${relative_height_size_generator(233)})`,
  bottom: 0,
  left: 0,
  // opacity: 0,
  transition: "transform 0.3s ease-in-out",
  // "&:hover": {
  //   transform: `translateY(-${relative_height_size_generator(233)})`,
  //   opacity: 1,
  // },
}));

const TeamMember = ({ image_source, role, name, description }) => {
  const [hovered, setHovered] = React.useState(true);
  const variants = {
    hidden: { opacity: 0, x: 0, y: relative_height_size_generator(-233) },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: relative_height_size_generator(-233) },
  };
  const isContentProvided = !(
    (role === "" && name === "" && description === "") ||
    (!role && !description && !description)
  );
  return (
    <Wrapper>
      &nbsp;
      <ImageComponent
        // objectFit="contain"
        // width={relative_width_size_generator(289)}
        height={relative_height_size_generator(521)}
        source={image_source}
        alt="team_mate"
        style={{ borderRadius: "20px" }}
      />
      {isContentProvided ? (
        <Information
          spacing={relative_height_size_generator(6)}
          direction="column"
        >
          <TypographyComponent
            sx={{ opacity: 0.7 }}
            variant="AboutTeamMemberRole"
            component="h6"
          >
            {role}
          </TypographyComponent>
          <TypographyComponent
            sx={{ opacity: 1 }}
            variant="AboutTeamMemberName"
            component="h4"
          >
            {name}
          </TypographyComponent>
          <TypographyComponent
            component="p"
            sx={{ opacity: 1 }}
            variant="AboutTeamMemberDescription"
          >
            {description}
          </TypographyComponent>
        </Information>
      ) : null}
    </Wrapper>
  );
};

export default TeamMember;
