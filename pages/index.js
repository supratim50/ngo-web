// components

import Navbar from "../components/navbar/navbar";
import HeroSection from "../components/hero/heroSection";
import AboutSection from "../components/about/aboutSection";
import Campaign from "../components/campaign/campaign";
import TrustSection from "../components/trust/trustSection";
import GallerySection from "../components/gallery/gallerySection";
import WellfareSection from "../components/wellfare/wellfareSection";
import FaqSection from "../components/faq/faqSection";
import ContactUs from "../components/contactUs/contactUsSection";
import FooterCardSection from "../components/footer/footerCardSection";
import FooterSection from "../components/footer/footerSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Campaign />
      <TrustSection />
      <GallerySection />
      <WellfareSection />
      <FaqSection />
      <ContactUs />
      <FooterCardSection />
      <FooterSection />
    </>
  );
};

export default Home;
