import ProfileListing from "components/UseCase/profileListing";
import { useRouter } from "next/router";
import { cardDatas } from "utils/dummy_data";
import { useSelector } from "react-redux";

const PersonalProfiles = () => {
  const cardData = useSelector((state) => state?.card?.cardsData);
  console.log(cardData);

  return (
    <>
      <ProfileListing
        heading={"Selected Properties"}
        cardData={cardData ? cardData : cardDatas}
        isPay
      />
    </>
  );
};

export default PersonalProfiles;
