export const AGENT_LISTINGS = [
  ...new Array(20).fill(null).map((_, index) => {
    return {
      img: `/BuyAgentListing/Ellipse 2070-${index}.png`,
      name: "Danial Austin",
      email: "danialaustin007@gmail.com",
      listedProperties: 31,
      collections: 14,
      id: index,
    };
  }),
];

export const CATEGORIES = [
  {
    type: "Lands & Plots",
    number: 51427,
    id: 0,
  },
  {
    type: "Houses",
    number: 21101,
    id: 1,
  },
  {
    type: "Apartments & Flats",
    number: 7407,
    id: 2,
  },
  {
    type: "Shops - Offices - Commercial Space",
    number: 3621,
    id: 3,
  },
  {
    type: "Portions & Floors",
    number: 830,
    id: 4,
  },
];

export const LOCATIONS = [
  {
    location: "Punjab",
    number: 13831,
    id: 0,
  },
  {
    location: "Islamabad Capital Territory",
    number: 3590,
    id: 1,
  },
  {
    location: "Sindh",
    number: 3190,
    id: 2,
  },
  {
    location: "Khyber Pakhtunkhwa",
    number: 483,
    id: 3,
  },
  {
    location: "Balochistan",
    number: 3,
    id: 4,
  },
];

export const COUNTRIES = [
  { id: 1, label: "United States", code: "US" },
  { id: 2, label: "Canada", code: "CA" },
  { id: 3, label: "France", code: "FR" },
  { id: 4, label: "Japan", code: "JP" },
];
