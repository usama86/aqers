import StackCompoent from "../../Base/StackCompoent";
import TextFieldComponent from "../../Base/TextFieldComponent";
import { useState } from "react";
import TypographyComponent from "components/Base/TypographyComponent";
import ButtonComponent from "components/Base/ButtonComponent";
import GoogleLogo from "../../Icons/Google-logo";
import LoginPagesForm from "../../Layouts/LoginPagesForm";
import { relative_width_size_generator } from "utils/helpers";
import LinkComponent from "components/Base/LinkComponent";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <LoginPagesForm heading="Login to your Account">
      <StackCompoent direction="column" style={{ width: "100%" }}>
        {/* <TypographyComponent variant="h6">Phone Number</TypographyComponent> */}
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
      </StackCompoent>{" "}
      <ButtonComponent
        color="primary"
        fullWidth
        style={{
          marginTop: relative_width_size_generator(68),
          borderRadius: "14px",
        }}
      >
        <LinkComponent
          linkStyle={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          href="/otp"
        >
          Login
        </LinkComponent>
      </ButtonComponent>
    </LoginPagesForm>
  );
};

export default LoginPage;
