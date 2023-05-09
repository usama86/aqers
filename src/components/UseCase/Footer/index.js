import AboutUs from "./AboutUs";
import DownloadApp from "./DownloadApp";
import FooterUrls from "./FooterUrls";

function Footer({ sectionsToShow, isBackgroundLightDownloadApp }) {
  const toShowSection = (sectionName) => {
    return sectionsToShow.includes(sectionName);
  };
  return (
    <>
      {toShowSection("download-app") && (
        <DownloadApp
          isBackgroundLightDownloadApp={isBackgroundLightDownloadApp}
        />
      )}
      {toShowSection("about-us") && <AboutUs />}
      {toShowSection("footer-url") && <FooterUrls />}
    </>
  );
}

Footer.defaultProps = {
  sectionsToShow: ["download-app", "about-us", "footer-url"],
  isBackgroundLightDownloadApp: false,
};

export default Footer;
