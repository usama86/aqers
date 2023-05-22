import PropertyDetailsComponent from "components/UseCase/PropertyDetails";
import React from "react";

const PreviewPropertyDetails = () => {
  return (
    <PropertyDetailsComponent
      showMortgage={false}
      showFeaturedProperties={false}
      Texts={"Publish"}
    />
  );
};

export default PreviewPropertyDetails;
