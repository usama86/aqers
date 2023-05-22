export const LOGIN_PAGE = {};
export const OTP = {};
export const SELECT_PURPOSE = {};
export const FEATURED_PROPERTIES = {
  PRICE_MIN_DEFAULT: 500000,
  PRICE_MAX_DEFAULT: 10000000,
  CONSTRUCTION_STATE_CHECKBOXES: [
    {
      id: 0,
      name: "furnished",
      label: "Furnished",
      number: 1305,
    },
    {
      id: 1,
      name: "grey-structure",
      label: "Grey Structure",
      number: 65,
    },
  ],
  FEATURES_CHECKBOXES: [
    {
      id: 0,
      name: "kitchen",
      label: "Kitchen",
      number: 1229,
    },
    {
      id: 1,
      name: "drawing-room",
      label: "Drawing Room",
      number: 1066,
    },
    {
      id: 2,
      name: "dining-room",
      label: "Dining Room",
      number: 896,
    },
    {
      id: 3,
      name: "lounge-sitting",
      label: "Lounge or Sitting Room",
      number: 842,
    },
    {
      id: 4,
      name: "store-room",
      label: "Store Room",
      number: 756,
    },
  ],
  AREA_UNITS: [
    {
      location: "Kanal",
      id: 0,
    },
    {
      location: "Marla",
      id: 1,
    },
    {
      location: "Square Feet",
      id: 2,
    },
    {
      location: "Square Meter",
      id: 3,
    },
    {
      location: "Square Yards",
      id: 4,
    },
  ],
};

export const BOOKING_AVAILABLE_TIMINGS = [
  {
    id: 0,
    startTime: "09:00",
    endTime: "11:00",
  },
  {
    id: 1,
    startTime: "11:00",
    endTime: "13:00",
  },
  {
    id: 2,
    startTime: "13:00",
    endTime: "15:00",
  },
  {
    id: 3,
    startTime: "15:00",
    endTime: "17:00",
  },
  {
    id: 4,
    startTime: "17:00",
    endTime: "19:00",
  },
  {
    id: 5,
    startTime: "19:00",
    endTime: "21:00",
  },
];

export const WHEN_LOOKING_TO_BUY_TIMEFRAMES = [
  {
    value: "0-3",
    label: "0-3 Months",
  },
  {
    value: "3-6",
    label: "3-6 Months",
  },
  {
    value: "6-12",
    label: "6-12 Months",
  },
  {
    value: "12+",
    label: "Year +",
  },
];
