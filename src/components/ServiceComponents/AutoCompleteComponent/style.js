import Autocomplete from '@mui/material/Autocomplete'
import { styled } from '@mui/material/styles'

export const AutoCompleteStyled = styled(Autocomplete)(({ theme }) => ({
  legend: { display: 'none' },
  fieldset: {
    backgroundColor: 'white',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(0, 0, 0, 0.87) !important',
    borderWidth: '1px !important',
  },
  '& .MuiFormLabel-root': {
    display: 'none',
  },
  width: '260px',
  '& .MuiInputBase-root': {
    height: '35px',
    paddingTop: '0px',
    borderRadius: '8px',
    backgroundColor: 'white',
  },
  '& .MuiAutocomplete-input': {
    paddingTop: '5.5px !important',
    paddingLeft: '4px !important',
  },
  input: { zIndex: 1, color: theme.palette.common.black, opacity: 1 },
  '& .MuiAutocomplete-endAdornment': {
    zIndex: 1,
    right: '7px !important',
  },
  [theme.breakpoints.down('md')]: {
    width: '307px',
    '& .MuiInputBase-root': {
      height: '47px',
    },
    '& .MuiAutocomplete-input': {
      paddingTop: '11px !important',
    },
  },
}))
