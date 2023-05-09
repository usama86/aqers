import BoxComponent from "components/Base/BoxComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import TextFieldComponent from "components/Base/TextFieldComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { Typography } from "components/Base/TypographyComponent/TypographyComponent.stories";
import React, { useState } from "react";
import styled from "styled-components";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const form_entries = [
    {
      name: "firstName",
      label: "First Name",
      props: {
        value: firstName,
        onInputChange: (input) => setFirstName(input),
      },
    },
    {
      name: "lastName",
      label: "First Name",
      props: {
        value: lastName,
        onInputChange: (input) => setLastName(input),
      },
    },
    {
      name: "email",
      label: "First Name",
      props: {
        value: email,
        onInputChange: (input) => setEmail(input),
      },
    },
    {
      name: "description",
      label: "First Name",
      props: {
        value: description,
        onInputChange: (input) => setDescription(input),
      },
    },
  ];

  return (
    <div style={{ width: relative_width_size_generator(531) }}>
      <TypographyComponent
        variant="ContactHeading1"
        component="h1"
        sx={{ marginBottom: relative_height_size_generator(24) }}
      >
        Have a question? Let&apos;s get in touch with us.
      </TypographyComponent>
      <TypographyComponent
        variant="ContactBody"
        component="div"
        sx={{ marginBottom: relative_height_size_generator(64) }}
      >
        Fill up the Form and our team will get back to within 24 hrs
      </TypographyComponent>
      <form>
        {form_entries.map((entry) => (
          <>
            <TypographyComponent
              sx={{ mb: relative_height_size_generator(4) }}
              variant="h6"
            >
              {entry.label}
            </TypographyComponent>
            <TextFieldComponent
              style={{ marginBottom: relative_height_size_generator(32) }}
              fullWidth
              variant="outlined"
              key={entry.name}
              {...entry.props}
              placeholder="Enter here"
            />
          </>
        ))}
        <ButtonComponent color="primary" fullWidth>
          Submit
        </ButtonComponent>
      </form>
    </div>
  );
};

export default ContactForm;
