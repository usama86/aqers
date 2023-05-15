import "styles/globals.css";
import "styles/SelectPurpose.css";
import "styles/Footer.css";
import Head from "next/head";
import Theme from "../Theme";
import LoginAppStyles from "components/UseCase/LoginPagesStyles";
import MainAppStyles from "components/UseCase/MainAppLayout";
import { wrapper } from "../store/store";
import useRouterProps from "hooks/useRouterProps";

const LOGIN_ROUTES = ["login", "otp", "select-purpose"];
const BUY_PROPERTIES_PROTECTED_PAGES = [
  "agent-listing",
  "agent-profile",
  "buy-properties",
  "featured-properties",
];
const SELL_PROPERTIES_PROTECTED_PAGES = [
  "dashboard",
  "profile-listing",
  "profile-listing-collection",
  "my-booking",
];

function App({ Component, pageProps }) {
  const { path } = useRouterProps();
  let navBarVariant = "";
  if (BUY_PROPERTIES_PROTECTED_PAGES.includes(path)) {
    navBarVariant = "buyProperties";
  }
  if (SELL_PROPERTIES_PROTECTED_PAGES.includes(path)) {
    navBarVariant = "sellProperties";
  }
  console.log(
    "using this console log because im expecting a problem at dynamic routes",
    { path }
  );
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
          <MainAppStyles
            componentVariant={navBarVariant}
            path={path}
            Component={<Component {...pageProps} />}
          />
        )}
      </Theme>
    </>
  );
}

export default wrapper.withRedux(App);
