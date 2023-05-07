export const styles = {
  iconButtonContainerBox: {
    marginRight: '78.36px',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  profilePictureContainerBox: {
    position: 'relative',
  },
  profilePicture: {
    width: '29.64px',
    height: '29.64px',
  },
  noProfilePicture: {
    display: 'block',
    width: '29.64px',
    height: 'auto',
  },
  accountDropdownListMenu: { width: '228px' },
  accountDropdownPopover: {
    position: 'absolute',
    top: 40,
    left: -180,
    backgroundColor: 'var(--mui-palette-white-A50)',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px var(--mui-pallete-black-10)',
  },
}
