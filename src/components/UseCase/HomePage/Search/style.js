import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: relative_height_size_generator(758),
    position: "relative",
    // padding: "50px",
    width: relative_width_size_generator(1820),
    margin: "0 auto",
    // marginTop: "144px",
    "@media (max-width: 600px)": {
      display: "block",
      height: relative_height_size_generator(317),
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
    // marginBottom: relative_height_size_generator(50),
  },
  containerDiv: {
    textAlign: "center",
    zIndex: 10,
    // position: "absolute",
    // top: "50%",
    width: relative_width_size_generator(843),
    margin: "0px auto",
    width: relative_width_size_generator(1440),
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
    width: relative_width_size_generator(843),
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    "@media (max-width: 600px)": {
      display: "none",
      textShadow: "0px 0px 5px rgba(0, 0, 0, 0.75)",
    },
  },
  headerlightWeb: {
    color: "#EDEFF6",
    width: relative_width_size_generator(843),
    textAlign: "center",
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    "@media (max-width: 600px)": {
      display: "none",
      textShadow: "0px 0px 5px rgba(0, 0, 0, 0.75)",
    },
  },
  headerTextResponsive: {
    color: "#ffffff",
    width: relative_width_size_generator(675),
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
    marginRight: relative_width_size_generator(10),
    marginTop: relative_height_size_generator(24),
    width: relative_width_size_generator(100),
    height: relative_height_size_generator(43),
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
    marginRight: relative_width_size_generator(10),
    marginTop: relative_height_size_generator(24),
    width: relative_width_size_generator(100),
    height: relative_height_size_generator(43),
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    "@media (max-width: 600px)": {
      width: relative_width_size_generator(75.98),
      height: relative_height_size_generator(38),
      borderRadius: "6.0787px",
      marginTop: relative_height_size_generator(20),
    },
  },
  searchBar: {
    // marginTop: "22px",
    height: relative_height_size_generator(50),
    "@media (max-width: 600px)": {
      marginTop: relative_height_size_generator(15),
    },
  },
};
