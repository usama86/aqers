import StackCompoent from "../../Base/StackCompoent";
import TextFieldComponent from "../../Base/TextFieldComponent";
import { useState } from "react";
import TypographyComponent from "../../Base/TypographyComponent";
import ButtonComponent from "../../Base/ButtonComponent";
import GoogleLogo from "./../../../assets/common/Google-logo";
import LoginPagesForm from "../../Layouts/LoginPagesForm";

const LoginPage = () => {
  const [otp, setOtp] = useState("");
  return (
    <LoginPagesForm heading="OTP Verification">
      <StackCompoent direction="column" style={{ width: "100%" }}>
        <TypographyComponent variant="h6">Enter OTP</TypographyComponent>
        <TextFieldComponent
          fullWidth
          variant="outlined"
          value={otp}
          label="Enter OTP"
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
    </LoginPagesForm>
  );
};

export default LoginPage;
