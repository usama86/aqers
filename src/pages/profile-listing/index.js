import ProfileListing from "components/UseCase/profileListing";
import { cardData } from "utils/dummy_data";
const PersonalProfiles = () => {
  return (
    <>
      <ProfileListing
        heading={"Listed Properties"}
        heading2={"Listed Properties Collections"}
        cardData={cardData}
      />
    </>
  );
};

export default PersonalProfiles;
