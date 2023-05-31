import ImageComponent from "../Base/ImageComponent";
import StackCompoent from "../Base/StackCompoent";
import TypographyComponent from "../Base/TypographyComponent";
import { relative_width_size_generator } from "utils/helpers";
import useRouterProps from "hooks/useRouterProps";

const LoginPagesForm = ({ heading, children }) => {
  const { path } = useRouterProps();
  // 1,275.38
  return (
    <StackCompoent
      direction="column"
      alignItems="center"
      style={{
        width:
          path === "select-purpose"
            ? relative_width_size_generator(1275.38)
            : relative_width_size_generator(398),
        // minWidth: path === "select-purpose" ? "531.53px" : "385px",
      }}
    >
      <ImageComponent
        height="72px"
        width="69.23px"
        position="relative"
        source="/Common/Logo.png"
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
