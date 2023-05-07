import StackCompoent from "../../Base/StackCompoent";
import TextFieldComponent from "../../Base/TextFieldComponent";
import { useState } from "react";
import TypographyComponent from "../../Base/TypographyComponent";
import ButtonComponent from "../../Base/ButtonComponent";
import GoogleLogo from "../../Icons/Google-logo";
import LoginPagesForm from "../../Layouts/LoginPagesForm";
import { relative_width_size_generator } from "utils/helpers";
import { useTheme } from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
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
          onInputChange={(input) => setOtp(input)}
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
      <ButtonComponent
        color="primary"
        fullWidth
        style={{ marginTop: relative_width_size_generator(68) }}
      >
        Login
      </ButtonComponent>
      <TypographyComponent
        style={{ marginTop: relative_width_size_generator(42) }}
        variant="body2"
      >
        Didn&apos;t receive code?{" "}
        <a
          href="#"
          style={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Resend
        </a>
      </TypographyComponent>
    </LoginPagesForm>
  );
};

export default LoginPage;
