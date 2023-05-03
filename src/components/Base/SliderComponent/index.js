import React from 'react'
import Slider from '@mui/material/Slider'
import PropTypes from 'prop-types'

export default function SliderComponent({ value, onChange, ...otherProps }) {
  const handleChange = (event, newValue) => {
    onChange(newValue)
  }

  return <Slider value={value} onChange={handleChange} {...otherProps} />
}

SliderComponent.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}
SliderComponent.defaultProps = {
  value: 0,
  onChange: () => {},
}
