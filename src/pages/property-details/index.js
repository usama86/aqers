import PropertyDetailsComponent from "components/UseCase/PropertyDetails";
import { useRouter } from "next/router";

const PropertyDetails = () => {
  const { query } = useRouter();

  return <PropertyDetailsComponent {...query} />;
};

export default PropertyDetails;
