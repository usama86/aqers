import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import BoxComponent from "../BoxComponent";
import TypographyComponent from "../TypographyComponent";
import DividerComponent from "../DividerComponent";
import ButtonComponent from "../ButtonComponent";
import { styles } from "./style";

function FormDialog({
  open,
  handleClose,
  title,
  subTitle,
  children,
  handleSave,
  ButtonText,
  ...otherProps
}) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <BoxComponent sx={styles.mainDiv}>
        <BoxComponent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.81px",
            flexWrap: "wrap",
          }}
        >
          <BoxComponent sx={styles.headerDiv}>
            <TypographyComponent
              sx={styles.dialogText}
              variant="DialogText"
              component="p"
            >
              {title}
            </TypographyComponent>
          </BoxComponent>
          <TypographyComponent
            sx={styles.dialogSubtitle}
            variant="DialogSubTitle"
            component="p"
          >
            {subTitle}
          </TypographyComponent>
        </BoxComponent>
        <DialogContent>{children}</DialogContent>
        <DialogActions sx={styles.dialogAction}>
          <BoxComponent sx={styles.buttonBox}>
            <ButtonComponent sx={styles.saveButton} onClick={handleSave}>
              {ButtonText}
            </ButtonComponent>
          </BoxComponent>
        </DialogActions>
      </BoxComponent>
    </Dialog>
  );
}

export default FormDialog;

FormDialog.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  handleSave: PropTypes.func,
  ButtonText: PropTypes.string,
};

FormDialog.defaultProps = {
  open: false,
  children: <></>,
  handleClose: () => {},
  title: "I am title",
  subTitle: "I am Sub Title",
  handleSave: () => {},
  ButtonText: "Save",
};
