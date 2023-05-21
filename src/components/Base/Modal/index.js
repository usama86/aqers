import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const styles = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    backgroundColor: (theme) => theme.palette.background.paper,
    border: "2px solid #000",
    width: "400px",
    boxShadow: (theme) => theme.shadows[5],
    borderRadius: "10px",
    padding: (theme) => theme.spacing(2, 4, 3),
    "& .MuiIconButton-root": {
      position: "absolute",
      top: (theme) => theme.spacing(1),
      right: (theme) => theme.spacing(1),
    },
  },
};

const MyModal = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      sx={{ ...styles.modal }}
    >
      <Box sx={styles.paper}>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default MyModal;

// import React from "react";
// import PropTypes from "prop-types";
// import Modal from "@mui/material/Modal";

// export default function ModalComponent({
//   open,
//   onClose,
//   children,
//   ...otherProps
// }) {
//   return (
//     <Modal open={open} onClose={onClose} {...otherProps}>
//       {children}
//     </Modal>
//   );
// }

// ModalComponent.propTypes = {
//   children: PropTypes.node,
//   open: PropTypes.bool,
//   onClose: PropTypes.func,
// };
// ModalComponent.defaultProps = {
//   children: <></>,
//   open: false,
//   onClose: () => {},
// };
