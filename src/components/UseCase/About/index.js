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

export const AboutPageLayout = styled(StackCompoent)(({ theme }) => ({
  padding: `${relative_height_size_generator(
    52
  )} ${relative_width_size_generator(320)} ${relative_height_size_generator(
    144
  )} ${relative_width_size_generator(320)}`,
}));

const About = () => {
  return (
    <AboutPageLayout
      spacing={relative_height_size_generator(128)}
      direction={"column"}
    >
      <Achievements />
      <SingleImage />
      <OurTeam />
      <SingleTestimonial />
    </AboutPageLayout>
  );
};

export default About;
