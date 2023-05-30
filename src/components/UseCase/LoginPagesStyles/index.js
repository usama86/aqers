import Image from "next/image";
import StackComponent from "../../Base/StackCompoent";
// import loginImage from "./../../../assets/login/Frame.png";
import ImageComponent from "../../Base/ImageComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import BoxComponent from "components/Base/BoxComponent";

const LoginAppStyles = ({ Component, path }) => {
  return (
    <StackComponent
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh", width: "100%", gap: "135px" }}
    >
      {Component}
      {path === "select-purpose" ? null : (
        <BoxComponent
          sx={{
            height: "100%",
            width: relative_width_size_generator(727),
            "@media (min-width: 1101px) and (max-width: 1400px)": {
              width: relative_width_size_generator(484),
            },
            "@media (max-width: 1100px)": {
              display: "none",
            },
          }}
        >
          <ImageComponent
            width={"100%"}
            position="relative"
            source="/login/Frame.png"
            alt="login-img"
          />
        </BoxComponent>
      )}
    </StackComponent>
  );
};

export default LoginAppStyles;
