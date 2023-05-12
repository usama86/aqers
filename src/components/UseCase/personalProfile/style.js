const flexStyle = {
  display: "flex",
  flexWrap: "wrap",
};

export const styles = {
  pageStyle: {
    background: "rgba(245, 245, 245, 1)",
    width: "100%",
    height: "1464px",
  },
  paddingStyle: {
    height: "1364px",
    borderRadius: "10px",
    background: "#FFFFFF",
    m: "40px 243px 60px 243px",
    p: "40px 36px 40px 56.67px",
  },
  headerStyle: { ...flexStyle, alignItems: "center" },
  avatarDiv: {
    ...flexStyle,
    flexGrow: "0.07",
  },
  avatarStyle: {
    bgcolor: "primary.main",
    width: "150px",
    height: "150px",
    background: "grey",
  },
  textDiv: {
    ...flexStyle,
    flexDirection: "column",
    gap: "1.33px",
    flexGrow: "1",
  },
  headingsStyle: {
    fontSize: "35px",
    color: "#313131",
  },
  subtitleStyle: {
    fontSize: "20px",
    color: "#696969",
  },
  BoxParent: {
    ...flexStyle,
    gap: "23.36px",
  },
  innerBox: {
    background: "#E1E9FF",
    ...flexStyle,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerHeading: {
    fontSize: "40px",
    color: "primary.main",
  },
  innerContent: {
    fontSize: "20px",
    color: "primary.main",
  },
  dividerStyle: {
    pt: "40px",
    width: "90%",
    color: "#696969",
  },
};
