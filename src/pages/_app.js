import "@/component/styles/globals.css";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import Theme from "../Theme";
import Navbar from "../components/UseCase/Navbar";
import Footer from "../components/UseCase/Footer";
import SpacerComponent from "../components/ServiceComponents/SpacerComponent";
import { styles } from "../styles/app-style";

import { wrapper } from "../store/store";

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Theme>
        <Navbar path={router.asPath} />
        <CssBaseline />
        <SpacerComponent
          sx={
            router.asPath == "/"
              ? styles.spacerStyleNavHome
              : styles.spacerStyleNav
          }
        />
        <Component {...pageProps} />
        <Footer />
      </Theme>
    </>
  );
}

export default wrapper.withRedux(App);
