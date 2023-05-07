export const styles = {
  appBar: {
    boxShadow: "none",
    backgroundColor: "var(--mui-palette-white-A50)",
    /**
     *  fix irrelevant padding, cause by MUI Menu component,when it render, it add extra paddingRight to navbar and body
     */
    padding: "0 !important",
    position: "fixed",
    "@media (max-width: 600px)": {
      boxShadow: "none",
      backgroundColor: "var(--mui-palette-white-A50)",
      position: "fixed",
      top: "0",
      border: "none",
    },
  },
  appBarHome: {
    boxShadow: "none",
    backgroundColor: "var(--mui-palette-white-A50)",
    position: "fixed",
    "@media (max-width: 600px)": {
      boxShadow: "none",
      backgroundColor: "transparent",
      position: "fixed",
      top: "0",
      border: "none",
    },
  },
  appBarHomeScroll: {
    boxShadow: "0px 2px 10px var(--mui-pallete-black-10)",
    backgroundColor: "var(--mui-palette-white-A50)",
    position: "fixed",
  },
  responsiveImage: {
    "@media (min-width: 600px)": { display: "none" },

    "@media (max-width: 300px)": { marginLeft: "10%" },
  },
  aqersLogo: {
    marginLeft: "213px",
    marginRight: "30px",
    "@media (max-width: 885px)": { marginLeft: "80px", marginRight: "40px" },
    "@media (max-width: 845px)": { marginLeft: "50px", marginRight: "30px" },
    "@media (max-width: 805px)": { marginLeft: "20px", marginRight: "20px" },
    "@media (max-width: 705px)": { marginLeft: "0px" },
  },
  clicksLogo: {
    marginRight: "25px",
    "@media (max-width: 600px)": { display: "none" },
  },
  navbarItem: {
    color: "var(--mui-palette-grey)",
    textDecoration: "none",
    textAlign: "center",
    "&:hover": { backgroundColor: "var(--mui-palette-white) !important" },
  },
  navbarItemInvest: {
    marginLeft: "5px",
    color: "var(--mui-palette-common-black)",
    textDecoration: "none",
    textAlign: "center",
    "&:hover": { backgroundColor: "var(--mui-palette-white) !important" },
  },
  signinButton: {
    color: "var(--mui-palette-common-black)",
    borderColor: "var(--mui-palette-common-black)",
    width: "87px",
    height: "41px",
    textTransform: "none",
    marginRight: "108px",
    "&:hover": {
      color: "var(--mui-palette-common-black)",
      borderColor: "var(--mui-palette-common-black)",
      backgroundColor: "var(--mui-palette-white)",
    },
    "@media (max-width: 805px)": { marginRight: "50px" },
    "@media (max-width: 705px)": { marginRight: "0px" },
    "@media (max-width: 600px)": {
      display: "none",
      color: "var(--mui-palette-white-A50)",
      borderColor: "var(--mui-palette-white-A50)",
      fontWeight: 600,
      fontSize: "10px",
      marginRight: "0px",
      "&:hover": {
        color: "var(--mui-palette-white-A50)",
        borderColor: "var(--mui-palette-white-A50)",
      },
    },
  },
  signinButtonResponsive: {
    color: "var(--mui-palette-common-black)",
    borderColor: "var(--mui-palette-common-black)",
    width: "87px",
    height: "41px",
    textTransform: "none",
    marginRight: "108px",
    zIndex: 50,
    "&:hover": {
      color: "var(--mui-palette-common-black)",
      borderColor: "var(--mui-palette-common-black)",
      backgroundColor: "var(--mui-palette-white)",
    },
    "@media (max-width: 805px)": { marginRight: "50px" },
    "@media (max-width: 705px)": { marginRight: "0px" },
    "@media (max-width: 600px)": {
      display: "none",
      color: "var(--mui-palette-common-black)",
      borderColor: "var(--mui-palette-common-black)",
      fontWeight: 600,
      fontSize: "10px",
      marginRight: "0px",
      "&:hover": {
        color: "var(--mui-palette-common-black)",
        borderColor: "var(--mui-palette-common-black)",
      },
    },
  },
  responsiveBoxSignin: {
    width: "25px",
    height: "25px",
    "@media (max-width: 600px)": { display: "none" },
  },
  headerRow: { display: "flex" },
  customMenuItem: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "11px !important",
    color: "var(--mui-pallete-gray-70)",
  },
  customMenu: { backgroundColor: "var(--mui-palette-white-A50)" },
  listMenu: { width: "336px" },
  flexGrowOne: {
    flexGrow: 1,
    marginBottom: "45px",
    display: "flex",
    "@media (max-width: 600px)": {
      flexGrow: 1,
      display: "flex",
      marginBottom: "0",
    },
  },
  nonLink: { textDecoration: "none" },
  popover: {
    backgroundColor: "var(--mui-palette-white-A50)",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px var(--mui-pallete-black-10)",
  },
  popoverContent: { pointerEvents: "auto" },
  justifyBetween: {
    "@media (max-width: 600px)": { justifyContent: "space-between" },
  },
  displayNone: {
    "@media (max-width: 600px)": { display: "none" },
  },
  displayNoneMin: {
    display: "none",
    "@media (max-width: 600px)": { display: "flex" },
  },
  flexGrowItems: {
    flexGrow: 1,
    display: "flex",
    marginLeft: "354px",
    "@media (max-width: 600px)": { display: "none" },
  },
  toolbarStyleOverride: {
    "@media (min-width: 600px)": {
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "30px",
      minHeight: "76px",
    },
  },
  popOverContainer: {
    backgroundColor: "transparent",
    paddingTop: "5px",
    position: "absolute",
    top: 36,
    left: 0,
  },
  displayNoneResponsive: {
    "@media (max-width: 600px)": { display: "none" },
  },
  wantedStyle: {
    textDecoration: "none",
    marginRight: "5px",
    border: "none",
    ":hover": {
      border: "none",
      backgroundColor: "#fff",
    },
  },
};
