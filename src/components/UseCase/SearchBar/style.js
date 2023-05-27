import styled from "@emotion/styled";
import ButtonComponent from "components/Base/ButtonComponent";
import SelectComponent from "components/Base/SelectComponent";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";

export const styles = {
  dropDownButton: {
    backgroundColor: "rgba(243, 241, 242, 1)",
    borderRadius: "0px",
    height: relative_height_size_generator(50),
    width: "130px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: `0 ${relative_width_size_generator(
    //   13
    // )} 0 ${relative_width_size_generator(22.75)}`,
  },
  button: {
    marginLeft: "0px !important",
    borderRadius: "0px",
    height: relative_height_size_generator(50),
    // position: "absolute",
    // bottom: "0px",
    // right: "0px",
    "@media (max-width: 900px)": {
      height: relative_height_size_generator(50),
      borderRadius: "0px",
      width: "4rem",
      "& .MuiTypography-root": {
        display: "none",
        fontSize: "12px",
      },
      "& a": {
        justifyContent: "center",
      },
      "& .css-4nxehu": {
        marginRight: "0 !important",
      },
    },
  },
  searchBar: {
    height: "50px",
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    "@media (max-width: 800px)": {
      height: "50px",
      borderRadius: "8px",
    },
  },
  searchWrapper: {
    marginTop: "10px",
    width: "40%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  searchChip: {
    borderRadius: "4px",
    background: "#f2f2f2",
    fontWeight: 400,
    fontSize: "10px",
    color: "#37474f",
  },
  searchIcon: {
    height: "20px",
    width: "20px",
  },
  searchBoxAdornment: {
    marginTop: "10px",
    marginRight: "10px",
    marginBottom: "10px",
  },
  searchBoxGroupItem: {
    fontWeight: "normal",
  },
  searchBoxGroupHeader: {
    marginLeft: "10px",
    fontWeight: "bold",
  },
  listHeader: {
    fontWeight: 600,
    fontSize: "11.64px",
    color: "#37474f",
    textAlign: "left",
    marginLeft: "15px",
    paddingLeft: "10px",
  },
  listButton: {
    fontWeight: 400,
    fontSize: "11.64px",
    color: "#737678",
    paddingLeft: "25px",
  },
  listItem: {
    background: "#ffffff",
    width: "100%",
    position: "absolute",
    overflowY: "scroll",
    minHeight: "0px",
    maxHeight: "300px",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
    boxShadow: "0px 10px 2px rgba(0, 0, 0, 0.1)",
    zIndex: 5,
    "@media (max-width: 600px)": {
      boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  chips: {
    background: "#f2f2f2",
    borderRadius: "4px",
    fontWeight: "400",
    fontSize: "10px",
    color: "#37474f",
    marginRight: "10px",
    marginTop: "2px",
    border: "none",
  },
  chipsContainer: {
    marginLeft: "10px",
    textAlign: "left",
    background: "#ffffff",
    marginBottom: "10px",
  },
};

export const StyledSelect = styled(SelectComponent)(({}) => ({
  // "& ul": {
  //   background: "#fff",
  //   listStyle: "none",
  // },
}));

export const StyledSelectBtn = styled(ButtonComponent)(({}) => ({
  borderRadius: "none",
}));
