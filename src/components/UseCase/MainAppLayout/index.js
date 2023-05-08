import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "components/UseCase/Navbar";
import Footer from "components/UseCase/Footer";
import { relative_height_size_generator } from "utils/helpers";

const MainAppStyles = ({ path, Component }) => {
  return (
    <>
      <Navbar path={path} />
      <CssBaseline />
      {/* <SpacerComponent
        sx={
          router.asPath == "/"
            ? styles.spacerStyleNavHome
            : styles.spacerStyleNav
        }
      /> */}
      {Component}
      <Footer />
    </>
  );
};
export default MainAppStyles;
