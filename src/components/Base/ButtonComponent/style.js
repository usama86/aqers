import Button from '@mui/material/Button'
import BoxComponent from '../BoxComponent'
import { styled } from '@mui/material/styles'

export const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  borderColor: theme.palette.common.black,
  boxShadow: 'none',
  ':hover': {
    boxShadow: 'none',
  },
}))

export const TransButtons = styled(Button)(({ theme, buy }) => ({
  display: 'flex',
  color: theme.palette.common.black,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  boxShadow: 'none',
  position: 'relative',
  height: '40px',
  ':after': {
    padding: 0,
    margin: 0,
    display: 'block',
    content: "''",
    width: buy ? '1px' : '0px',
    height: '50%',
    backgroundColor: 'black',
    position: 'absolute',
    right: '-1px',
    top: '10px',
    left: '-1px',
  },
  ':before': {
    padding: 0,
    margin: 0,
    display: 'block',
    content: "''",
    width: buy ? '1px' : '0px',
    height: '50%',
    backgroundColor: 'black',
    position: 'absolute',
    top: '10px',
    right: '-1px',
  },
  ':hover': {
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '21px',
  },
}))

export const LoaderWrapper = styled(BoxComponent)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
