import "./../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Theme from "../Theme";
import LoginAppStyles from "components/UseCase/LoginPagesStyles";
import MainAppStyles from "components/UseCase/MainAppLayout";
import { wrapper } from "../store/store";
import useRouterProps from "hooks/useRouterProps";

const LOGIN_ROUTES = ["login", "otp", "select-purpose"];

function App({ Component, pageProps }) {
  const { path } = useRouterProps();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Theme>
        {LOGIN_ROUTES.includes(path) ? (
          <LoginAppStyles
            path={path}
            Component={<Component {...pageProps} />}
          />
        ) : (
          <MainAppStyles path={path} Component={<Component {...pageProps} />} />
        )}
      </Theme>
    </>
  );
}

export default wrapper.withRedux(App);
