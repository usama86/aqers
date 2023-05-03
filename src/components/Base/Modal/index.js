import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@mui/material/Modal'

export default function ModalComponent({
  open,
  onClose,
  children,
  ...otherProps
}) {
  return (
    <Modal open={open} onClose={onClose} {...otherProps}>
      {children}
    </Modal>
  )
}

ModalComponent.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func,
}
ModalComponent.defaultProps = {
  children: <></>,
  open: false,
  onClose: () => {},
}
