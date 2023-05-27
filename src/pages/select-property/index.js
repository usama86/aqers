import ProfileListing from "components/UseCase/profileListing";
import { cardData } from "utils/dummy_data";
const PersonalProfiles = () => {
  return (
    <>
      <ProfileListing
        heading={"Listed Properties"}
        cardData={cardData}
        isContinue
      />
    </>
  );
};

export default PersonalProfiles;
