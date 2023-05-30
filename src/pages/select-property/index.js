import ProfileListing from "components/UseCase/profileListing";
import { useState } from "react";
import { cardData } from "utils/dummy_data";
import { useDispatch } from "react-redux";
import { AddCardData } from "./../../slices/CardData/index";

const PersonalProfiles = () => {
  const [selectedCard, setSelectedCard] = useState([]);
  const dispatch = useDispatch();
  const setCard = (data, id) => {
    const copy = [...selectedCard];
    if (selectedCard.find((index) => index.id === id)) {
      const index = selectedCard?.findIndex((index) => index.id === id);
      if (index > -1) {
        copy.splice(index, 1);
      }
    } else {
      copy.push(data);
    }
    setSelectedCard(copy);
    dispatch(
      AddCardData({
        type: "UPDATE_SELECTED_CARD",
        payload: copy,
      })
    );
  };
  const handleClick = () => {};

  return (
    <>
      <ProfileListing
        heading={"Listed Properties"}
        cardData={cardData}
        isContinue
        selectedCard={selectedCard}
        setCard={setCard}
        handleClick={handleClick}
      />
    </>
  );
};

export default PersonalProfiles;
