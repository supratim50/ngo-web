// components

import HeroSection from "../components/hero/heroSection";
import AboutSection from "../components/about/aboutSection";
import Campaign from "../components/campaign/campaign";
import TrustSection from "../components/trust/trustSection";
import GallerySection from "../components/gallery/gallerySection";
import WellfareSection from "../components/wellfare/wellfareSection";
import FaqSection from "../components/faq/faqSection";
import ContactUs from "../components/contactUs/contactUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Campaign />
      <TrustSection />
      <GallerySection />
      <WellfareSection />
      <FaqSection />
      <ContactUs />
    </>
  );
};

export default Home;
