import { useRouter } from "next/router";

const useRouterProps = () => {
  const router = useRouter();
  let path = router.asPath.split("/")[1];
  const removeQueryParams = path.split("?")[0];
  return { path: removeQueryParams };
};

export default useRouterProps;
