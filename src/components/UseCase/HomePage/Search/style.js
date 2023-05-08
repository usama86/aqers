import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "758px",
    position: "relative",
    // padding: "50px",
    width: relative_width_size_generator(1820),
    margin: "0 auto",
    // marginTop: "144px",
    "@media (max-width: 600px)": {
      display: "block",
      height: "317px",
      width: "100%",
      padding: "50px",
      borderRadius: "44px",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: relative_height_size_generator(50),
  },
  containerDiv: {
    textAlign: "center",
    // position: "absolute",
    // top: "50%",
    width: relative_width_size_generator(843),
    margin: "0px auto",
    maxWidth: "1440px",
    "@media (max-width: 900px)": {
      width: "92%",
    },
    "@media (max-width: 600px)": {
      width: "92%",
      left: 0,
      right: 0,
    },
  },
  headerTextWeb: {
    color: "#ffffff",
    whiteSpace: "nowrap",
    marginBottom: relative_height_size_generator(20),
    width: "843px",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    "@media (max-width: 600px)": {
      display: "none",
      textShadow: "0px 0px 5px rgba(0, 0, 0, 0.75)",
    },
  },
  headerlightWeb: {
    color: "#EDEFF6",
    width: "843px",
    textAlign: "left",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    "@media (max-width: 600px)": {
      display: "none",
      textShadow: "0px 0px 5px rgba(0, 0, 0, 0.75)",
    },
  },
  headerTextResponsive: {
    color: "#ffffff",
    width: "675px",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    "@media (max-width: 600px)": {
      textShadow: "0px 0px 5px rgba(0, 0, 0, 0.75)",
    },
    "@media (min-width: 600px)": {
      textShadow: "0px 0px 5px rgba(0, 0, 0, 0.75)",
      display: "none",
    },
  },
  purposeButton: {
    background: "rgba(255, 255, 255, 0.7)",
    color: "#37474f",
    marginRight: "10px",
    marginTop: "24px",
    width: "100px",
    height: "43px",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    "@media (max-width: 600px)": {
      width: "75.98px",
      height: "38px",
      borderRadius: "6.0787px",
      marginTop: "20px",
    },
  },
  activeButton: {
    backgroundColor: "#ffffff",
    color: "#37474f",
    marginRight: "10px",
    marginTop: "24px",
    width: "100px",
    height: "43px",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    "@media (max-width: 600px)": {
      width: "75.98px",
      height: "38px",
      borderRadius: "6.0787px",
      marginTop: "20px",
    },
  },
  searchBar: {
    // marginTop: "22px",
    height: "50px",
    "@media (max-width: 600px)": { marginTop: "15px" },
  },
};
