import { styled } from '@mui/material/styles'
import TypographyComponent from 'components/Base/TypographyComponent'
import TextField from '@mui/material/TextField'
import OutlinedInput from '@mui/material/OutlinedInput'

export const TextFieldCustom = styled(OutlinedInput)(({ theme }) => ({
  fontWeight: 400,
  fontSize: '11.64px',
  lineHeight: '19.8px',
  '& .MuiInputBase-root': {
    height: '80px',
  },
}))

export const TextFieldAuto = styled(TextField)(({ theme, focus }) => ({
  '& .MuiInputBase-root': {
    height: '80px',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '24px',
    borderBottomLeftRadius: focus && '0px',
    paddingLeft: '15px',
    paddingRight: '80px',
  },
  '& .Mui-focused': {
    borderBottomLeftRadius: '0px',
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiInputBase-root': {
      height: '60px',
      borderRadius: '8px',
      borderBottomLeftRadius: focus && '0px',
    },
    '& .Mui-focused': {
      borderBottomLeftRadius: '0px',
    },
  },
}))

export const ErrorTypographyComponent = styled(TypographyComponent)(() => ({
  color: 'var(--mui-palette-error-color)',
}))

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& > fieldset': {
      borderColor: 'var(--mui-palette-secondary-main)',
      borderWidth: '1px',
    },
  },
  '& .MuiOutlinedInput-root:hover': {
    '& > fieldset': {
      borderColor: 'var(--mui-palette-info-main)',
      borderWidth: '1px',
    },
  },
}))
