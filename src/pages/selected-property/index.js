import ProfileListing from "components/UseCase/profileListing";
import { cardDatas } from "utils/dummy_data";

const PersonalProfiles = () => {
  return (
    <>
      <ProfileListing
        heading={"Selected Properties"}
        cardData={cardDatas}
        isPay
      />
    </>
  );
};

export default PersonalProfiles;
