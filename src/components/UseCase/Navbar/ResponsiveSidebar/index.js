import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import LinkComponent from "./../../../Base/LinkComponent";
import BoxComponent from "./../../../Base/BoxComponent";
import Drawer from "@mui/material/Drawer";
import ImageComponent from "./../../../Base/ImageComponent";
import TypographyComponent from "./../../../Base/TypographyComponent";
import ButtonComponent from "./../../../Base/ButtonComponent";
import { styles } from "./style";
import { useRouter } from "next/router";

export default function ResponsiveSidebar({
  drawer,
  closeDrawer,
  toggleDrawer,
  direction,
  listItem,
  isLoggedIn,
}) {
  const [open, setOpen] = React.useState([false, false, false]);
  const dispatch = useDispatch();
  const router = useRouter();

  const list = (anchor) => (
    <BoxComponent
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        ...styles.drawerMainSytle,
      }}
      role="presentation"
    >
      <LinkComponent href={"/"} onClick={toggleDrawer(direction, false)}>
        <ImageComponent
          source={"/drawer-images/Graana-Responsive-Logo.svg"}
          sx={styles.imageStyle}
        />
      </LinkComponent>

      {/* {!isLoggedIn && ( */}
      <ButtonComponent sx={styles.buttonText}>
        <TypographyComponent
          sx={{
            color: "#37474F",
            letterSpacing: "0.03em",
            textAlign: "left",
          }}
          variant="body1New"
          component="div"
          onClick={handleSignInButton}
        >
          SIGN IN
        </TypographyComponent>
      </ButtonComponent>
    </BoxComponent>
  );

  return (
    <Drawer
      anchor={direction}
      open={drawer[direction]}
      onClose={toggleDrawer(direction, false)}
    >
      {list(direction)}
    </Drawer>
  );
}
