import Image from "next/image";
import StackComponent from "../../Base/StackCompoent";
import loginImage from "./../../../assets/login/Frame.png";
import ImageComponent from "../../Base/ImageComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "@/component/utils/helpers";

const LoginAppStyles = ({ Component }) => {
  return (
    <StackComponent
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh", width: "100%", gap: "135px" }}
    >
      {Component}
      <ImageComponent
        width={relative_width_size_generator(727)}
        position="relative"
        source={loginImage}
        alt="login-img"
      />
    </StackComponent>
  );
};

export default LoginAppStyles;
