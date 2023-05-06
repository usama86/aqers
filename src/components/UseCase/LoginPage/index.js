import { relative_width_size_generator } from "@/component/utils/helpers";
import ImageComponent from "../../Base/ImageComponent";
import StackCompoent from "../../Base/StackCompoent";
import logo from "./../../../assets/common/Logo.png";
import TextFieldComponent from "../../Base/TextFieldComponent";
import { useState } from "react";
import TypographyComponent from "../../Base/TypographyComponent";
import ButtonComponent from "../../Base/ButtonComponent";
import GoogleLogo from "./../../../assets/common/Google-logo";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <StackCompoent
      direction="column"
      alignItems="center"
      style={{ width: relative_width_size_generator(398), minWidth: "385px" }}
    >
      <ImageComponent
        height="72px"
        width="69.23px"
        position="relative"
        source={logo}
      />
      <TypographyComponent
        style={{ marginBottom: "56px", marginTop: "71px" }}
        variant="h2"
      >
        Login to your Account
      </TypographyComponent>
      <StackCompoent direction="column" style={{ width: "100%" }}>
        <TypographyComponent variant="h6">Phone Number</TypographyComponent>
        <TextFieldComponent
          fullWidth
          variant="outlined"
          value={phoneNumber}
          label="Phone Number"
          placeholder="Enter here"
          onInputChange={(input) => setPhoneNumber(input)}
        />
      </StackCompoent>
      <StackCompoent
        direction="column"
        alignItems="center"
        style={{ marginTop: "29px" }}
      >
        <TypographyComponent variant="body2" style={{ marginBottom: "16px" }}>
          Or Continue with
        </TypographyComponent>
        <ButtonComponent typeB>
          <span style={{ display: "flex", marginRight: "16px" }}>
            <GoogleLogo />
          </span>
          <TypographyComponent variant="button">Google</TypographyComponent>
        </ButtonComponent>
      </StackCompoent>
      <ButtonComponent color="primary" fullWidth style={{ marginTop: "68px" }}>
        Login
      </ButtonComponent>
      {/* login buton */}
    </StackCompoent>
  );
};

export default LoginPage;
