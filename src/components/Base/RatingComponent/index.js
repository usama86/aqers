import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { StyledRating } from './style'

export default function RatingComponent({
  size,
  value,
  precision,
  readonly,
  onChange,
  ...otherProps
}) {
  return (
    <StyledRating
      size={size}
      precision={precision}
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue)
      }}
      readOnly={readonly}
      icon={<StarRoundedIcon style={{ opacity: 1 }} fontSize="inherit" />}
      emptyIcon={<StarRoundedIcon style={{ opacity: 1 }} fontSize="inherit" />}
      {...otherProps}
    />
  )
}

RatingComponent.propTypes = {
  size: PropTypes.string,
  value: PropTypes.number,
  readonly: PropTypes.bool,
  precision: PropTypes.number,
  onChange: PropTypes.func,
}
RatingComponent.defaultProps = {
  size: 'medium',
  value: 4,
  readonly: true,
  precision: 0.1,
  onChange: {},
}
