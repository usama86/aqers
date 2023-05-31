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

const Contact = () => {
  return (
    <BoxComponent
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: relative_width_size_generator(55),
        marginTop: relative_height_size_generator(53),
        paddingBottom: relative_height_size_generator(120),
        "@media (max-width: 1200px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <ContactForm />
      <Map />
    </BoxComponent>
  );
};

export default Contact;
