import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

export const CustomList = styled(List)(({ theme }) => ({
  width: '330px',
  padding: 0,
}))

export const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  fontWeight: theme.typography.body2New.fontWeight,
  fontSize: theme.typography.body2New.fontSize,
}))

export const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '8px',
}))

export const styles = {
  divider: {
    border: '1px solid var(--mui-palette-white-A100)',
  },
  listStyle: {
    textDecoration: 'none',
    color: 'var(--mui-palette-secondary-main)',
  },
}
