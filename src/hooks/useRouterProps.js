import { useRouter } from "next/router";

const useRouterProps = () => {
  const router = useRouter();
  let path = router.asPath.split("/")[1];

  return { path };
};

export default useRouterProps;
