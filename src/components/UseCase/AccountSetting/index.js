import React, { useState } from "react";
import BoxComponent from "components/Base/BoxComponent";
import TypographyComponent from "components/Base/TypographyComponent";
import { styles } from "./style";
import TextFieldComponent from "components/Base/TextFieldComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import RadioGroupComponent from "components/Base/RadioGroupComponent";
import styled from "@emotion/styled";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

const StyledRadioGroupComponent = styled(RadioGroupComponent)(({ theme }) => ({
  width: "100%",
  marginLeft: relative_width_size_generator(32),
  marginTop: relative_height_size_generator(41),
  gap: relative_height_size_generator(21),
  "& .MuiFormControlLabel-root": {
    marginRight: relative_width_size_generator(132),
  },
}));

const AccountSetting = () => {
  const [gender, setGender] = useState("male");

  return (
    <BoxComponent sx={styles.pageStyle}>
      <BoxComponent sx={styles.paddingStyle}>
        <BoxComponent>
          <TypographyComponent
            sx={{ fontSize: "44px", color: "#1D3444" }}
            variant="Booking"
            component="h1"
          >
            Account Settings
          </TypographyComponent>
        </BoxComponent>
        <BoxComponent
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            pt: "38px",
            gap: "70px",
          }}
        >
          <BoxComponent sx={{ display: "flex", flexWrap: "wrap", gap: "74px" }}>
            <BoxComponent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                flexGrow: "0.5",
              }}
            >
              <TypographyComponent
                variant="AccountText"
                component="p"
                sx={{ fontSize: "18px", color: "#2A3249" }}
              >
                Your Name
              </TypographyComponent>
              <TextFieldComponent placeholder="Enter Here" />
            </BoxComponent>
            <BoxComponent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                flexGrow: "0.5",
              }}
            >
              <TypographyComponent
                variant="AccountText"
                component="p"
                sx={{ fontSize: "18px", color: "#2A3249" }}
              >
                Email
              </TypographyComponent>
              <TextFieldComponent placeholder="Enter Here" />
            </BoxComponent>
          </BoxComponent>
          <BoxComponent sx={{ display: "flex", flexWrap: "wrap", gap: "74px" }}>
            <BoxComponent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                flexGrow: "0.5",
              }}
            >
              <TypographyComponent
                variant="AccountText"
                component="p"
                sx={{ fontSize: "18px", color: "#2A3249" }}
              >
                DOB
              </TypographyComponent>
              <TextFieldComponent placeholder="Enter Here" />
            </BoxComponent>
            <BoxComponent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                flexGrow: "0.5",
              }}
            >
              <TypographyComponent
                variant="AccountText"
                component="p"
                sx={{ fontSize: "18px", color: "#2A3249" }}
              >
                Location
              </TypographyComponent>
              <TextFieldComponent placeholder="Enter Here" />
            </BoxComponent>
          </BoxComponent>
        </BoxComponent>
        {/* 
        <BoxComponent sx={{display:'flex',pl:'30px', flexDirection:'column', gap:'22px'}}>
                <TypographyComponent>Select Gender</TypographyComponent>
                <BoxComponent>
                  <RadioButton></RadioButton>
                </BoxComponent>
        </BoxComponent> */}
        <StyledRadioGroupComponent
          value={gender}
          setValue={(val) => setGender(val)}
          groupLabel="Select Gender"
          options={[
            {
              value: "male",
              label: "Male",
            },
            {
              value: "female",
              label: "Female",
            },
            {
              value: "other",
              label: "Other",
            },
          ]}
        />

        <ButtonComponent
          sx={{
            height: "48px",
            width: "185px",
            borderRadius: "14px",
            background: "#92198C",
            color: "#FFFFFF",
            mt: "83px",
          }}
        >
          Save
        </ButtonComponent>
      </BoxComponent>
    </BoxComponent>
  );
};

export default AccountSetting;
