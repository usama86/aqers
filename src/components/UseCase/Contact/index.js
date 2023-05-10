import styled from "@emotion/styled";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import InfoPagesLayout from "components/Layouts/InfoPagesLayout";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import ContactForm from "./ContactForm";
import Map from "./Map";

export const Wrapper = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: relative_width_size_generator(55),
  marginTop: relative_height_size_generator(53),
  paddingBottom: relative_height_size_generator(120),
}));

const Contact = () => {
  return (
    <Wrapper>
      <ContactForm />
      <Map />
    </Wrapper>
  );
};

export default Contact;
