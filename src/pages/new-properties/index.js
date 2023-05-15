import FeaturedPropertiesComponent from "components/UseCase/FeaturedProperties";
import { useRouter } from "next/router";

const FeaturedProperties = () => {
  const router = useRouter();
  const { search } = router.query;
  return <FeaturedPropertiesComponent heading={"New Properties"} />;
};

export default FeaturedProperties;
