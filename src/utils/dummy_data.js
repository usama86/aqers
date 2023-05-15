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
export const FEATURED_PROPERTIES = [
  ...new Array(16).fill(null).map((_, index) => {
    return {
      img: `/FeaturedProperties/${index}.png`,
      title: "92 ALLIUM PLACE, ORLA...",
      bed: "4",
      bath: "4",
      location: "New York, NY",
      view: 569,
      id: index,
      dimension: "2.096",
      unit: "ft",
      featured: true,
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

export const cardData = [
  {
    id: 1,
    featured: true,
    title: " 92 ALLIUM PLACE, ORLA...",
    bed: "4",
    bath: "4",
    dimension: "2.096",
    unit: "ft",
    location: "New York, NY",
    view: "5690",
  },
  {
    id: 2,
    featured: true,
    title: "1000 BROADWAY, NEW YORK, NY",
    bed: "3",
    bath: "2",
    dimension: "1.500",
    unit: "ft",
    location: "New York, NY",
    view: "4567",
  },
  {
    id: 3,
    featured: false,
    title: "2000 MADISON AVENUE, NEW YORK, NY",
    bed: "5",
    bath: "4",
    dimension: "3.000",
    unit: "ft",
    location: "New York, NY",
    view: "3456",
  },
  {
    id: 4,
    featured: true,
    title: "3000 PARK AVENUE, NEW YORK, NY",
    bed: "6",
    bath: "5",
    dimension: "4.500",
    unit: "ft",
    location: "New York, NY",
    view: "2345",
  },
  {
    id: 5,
    featured: false,
    title: "4000 FIFTH AVENUE, NEW YORK, NY",
    bed: "7",
    bath: "6",
    dimension: "6.000",
    unit: "ft",
    location: "New York, NY",
    view: "1234",
  },
  {
    id: 6,
    featured: true,
    title: "5000 CENTRAL PARK WEST, NEW YORK, NY",
    bed: "8",
    bath: "7",
    dimension: "7.500",
    unit: "ft",
    location: "New York, NY",
    view: "9876",
  },
  {
    id: 7,
    featured: false,
    title: "6000 UPPER EAST SIDE, NEW YORK, NY",
    bed: "9",
    bath: "8",
    dimension: "9.000",
    unit: "ft",
    location: "New York, NY",
    view: "8765",
  },
  {
    id: 8,
    featured: true,
    title: "7000 UPPER WEST SIDE, NEW YORK, NY",
    bed: "10",
    bath: "9",
    dimension: "10.500",
    unit: "ft",
    location: "New York, NY",
    view: "7654",
  },
  {
    id: 9,
    featured: false,
    title: "8000 LOWER EAST SIDE, NEW YORK, NY",
    bed: "11",
    bath: "10",
    dimension: "12.000",
    unit: "ft",
    location: "New York, NY",
    view: "6543",
  },
  {
    id: 10,
    featured: true,
    title: "9000 CHINATOWN, NEW YORK, NY",
    bed: "12",
    bath: "11",
    dimension: "13.500",
    unit: "ft",
    location: "New York, NY",
    view: "5432",
  },
  {
    id: 11,
    featured: false,
    title: "10000 LITTLE ITALY, NEW YORK, NY",
    bed: "13",
    bath: "12",
    dimension: "15.000",
    unit: "ft",
    location: "New York, NY",
    view: "4321",
  },
  {
    id: 12,
    featured: true,
    title: "11000 EAST VILLAGE, NEW YORK, NY",
    bed: "14",
    bath: "13",
    dimension: "16.500",
    unit: "ft",
    location: "New York, NY",
    view: "3210",
  },
];

export const collectionCardData = [
  {
    id: 1,
    source1: "/Common/test_image.png",
    source2: "/Common/test_image.png",
    source3: "/Common/test_image.png",
    source4: "/Common/test_image.png",
  },
  {
    id: 2,
    source1: "/Common/test_image.png",
    source2: "/Common/test_image.png",
    source3: "/Common/test_image.png",
    source4: "/Common/test_image.png",
  },
  {
    id: 3,
    source1: "/Common/test_image.png",
    source2: "/Common/test_image.png",
    source3: "/Common/test_image.png",
    source4: "/Common/test_image.png",
  },
  {
    id: 4,
    source1: "/Common/test_image.png",
    source2: "/Common/test_image.png",
    source3: "/Common/test_image.png",
    source4: "/Common/test_image.png",
  },
];
