export const DRAWER_ITEMS_SIGN_OUT = [
  {
    value: "Buy",
    imageSource: "/drawer-images/buy-house.svg",
    expandIcon: "/drawer-images/chevron-down.svg",
    collapseIcon: "/drawer-images/chevron-horizontal.svg",
  },
  {
    value: "Rent",
    imageSource: "/drawer-images/rent-house.svg",
    expandIcon: "/drawer-images/chevron-down.svg",
    collapseIcon: "/drawer-images/chevron-horizontal.svg",
  },
  {
    value: "Sell",
    imageSource: "/drawer-images/sell-house.svg",
    expandIcon: "/drawer-images/chevron-down.svg",
    collapseIcon: "/drawer-images/chevron-horizontal.svg",
  },
  {
    value: "Invest",
    imageSource: "/drawer-images/invest.svg",
    link: `/projects/list`,
  },
];

export const DRAWER_ITEMS_SIGN_IN = [
  ...DRAWER_ITEMS_SIGN_OUT,
  {
    value: "My Properties",
    imageSource: "/drawer-images/my-properties.svg",
    link: "/my-properties?status=draft",
  },
  {
    value: "Liked Properties",
    imageSource: "/drawer-images/liked-properties.svg",
    link: "/liked-properties",
  },
  {
    value: "Profile Settings",
    imageSource: "/drawer-images/profile-settings.svg",
    link: "/my-account",
  },
  { value: "Sign out", imageSource: "/drawer-images/Signout.svg", link: "/" },
];
