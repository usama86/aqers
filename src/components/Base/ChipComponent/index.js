import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@mui/material/Chip'

export default function ChipComponent({
  label,
  clickable,
  onClick,
  ...otherProps
}) {
  const { key, ...rest } = otherProps
  return (
    <Chip {...rest} label={label} clickable={clickable} onClick={onClick} />
  )
}

ChipComponent.propTypes = {
  label: PropTypes.string,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
}
ChipComponent.defaultProps = {
  label: '',
  clickable: false,
  onClick: () => {},
}
