import styled from "@emotion/styled";
import TypographyComponent from "components/Base/TypographyComponent";
import InfoPagesLayout from "components/Layouts/InfoPagesLayout";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import Achievements from "./Achievements";
import SingleImage from "./SingleImage";
import OurTeam from "./OurTeam";
import SingleTestimonial from "./SingleTestimonial";
import StackCompoent from "components/Base/StackCompoent";

const About = () => {
  return (
    <StackCompoent
      sx={{
        padding: `${relative_height_size_generator(
          52
        )} ${relative_width_size_generator(
          320
        )} ${relative_height_size_generator(
          144
        )} ${relative_width_size_generator(320)}`,
        "@media (max-width:1400px)": {
          padding: "52px 100px",
        },
        "@media (max-width:700px)": {
          padding: "52px 2rem",
        },
        "@media (max-width: 1000px)": {
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
      }}
      spacing={relative_height_size_generator(128)}
      direction={"column"}
    >
      <Achievements />
      <SingleImage />
      <OurTeam />
      <SingleTestimonial />
    </StackCompoent>
  );
};

export default About;
