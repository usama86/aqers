import "@/component/styles/globals.css";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import Theme from "../Theme";
import Navbar from "../components/UseCase/Navbar";
import Footer from "../components/UseCase/Footer";
import SpacerComponent from "../components/ServiceComponents/SpacerComponent";
import { styles } from "../styles/app-style";
import LoginAppStyles from "./../components/UseCase/LoginPagesStyles";
import MainAppStyles from "../components/UseCase/MainAppLayout";
import { wrapper } from "../store/store";

const LOGIN_ROUTES = ["login", "otp", "select-purpose"];

function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath.split("/")[1];
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
