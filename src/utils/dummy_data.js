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
