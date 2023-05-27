import "styles/globals.css";
import "styles/SelectPurpose.css";
import "styles/Footer.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";
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
  "buy",
  "rent",
  "featured-properties",
];
const SELL_PROPERTIES_PROTECTED_PAGES = [
  "dashboard",
  "profile-listing",
  "profile-listing-collection",
  "my-booking",
  "account-setting",
  "select-property",
  "selected-property",
  "preview-property-details",
];

const GREY_PAGES = [
  ...BUY_PROPERTIES_PROTECTED_PAGES,
  ...SELL_PROPERTIES_PROTECTED_PAGES,
  "property-details",
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
            isGrey={GREY_PAGES.includes(path)}
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
