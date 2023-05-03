import * as React from 'react'
import TextFieldComponent from 'components/Base/TextFieldComponent'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'
import PropTypes from 'prop-types'

export default function AutocompleteComponent({
  optionsArray,
  optionHeading,
  isBasic,
  newComponent,
  zIndexPopper,
  ...otherProps
}) {
  const options = optionsArray.map((option) => {
    return {
      firstLetter: optionHeading,
      ...option,
    }
  })

  return isBasic ? (
    <Autocomplete
      {...otherProps}
      disablePortal={true}
      disableListWrap={true}
      sx={{
        position: 'relative',
        zIndex: 0,
        '& .MuiAutocomplete-inputRoot': {
          fontSize: '11.64px',
          fontWeight: '400',
        },
        '& + .MuiAutocomplete-popper': {
          position: 'relative',
          zIndex: zIndexPopper,
        },
      }}
    />
  ) : (
    <Autocomplete
      options={options}
      popupIcon={null}
      getOptionLabel={(option) => option.longName}
      {...otherProps}
      renderInput={(params) => (
        <TextFieldComponent
          isAuto
          {...params}
          placeholder="Search by city or area..."
        />
      )}
      ListboxComponent={newComponent}
    />
  )
}

AutocompleteComponent.propTypes = {
  optionsArray: PropTypes.array,
  optionHeading: PropTypes.string,
  zIndexPopper: PropTypes.number,
}
AutocompleteComponent.defaultProps = {
  optionsArray: [],
  optionHeading: '',
  zIndexPopper: 1,
}

export { createFilterOptions }
