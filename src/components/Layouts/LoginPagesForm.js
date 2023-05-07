import ImageComponent from "../Base/ImageComponent";
import StackCompoent from "../Base/StackCompoent";
import TypographyComponent from "../Base/TypographyComponent";
import logo from "./../../assets/common/Logo.png";
import { relative_width_size_generator } from "@/component/utils/helpers";

const LoginPagesForm = ({ heading, children }) => {
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
        {heading}
      </TypographyComponent>
      {children}
    </StackCompoent>
  );
};

LoginPagesForm.defaultProps = {
  heading: "No heading provided",
};

export default LoginPagesForm;
