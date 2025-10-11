import { WhyChooseUs } from "./components/ChooseUs";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { OurServices } from "./components/Services";
import { Testimonial } from "./components/Testimonial";


export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices />
      <Testimonial/>
      <WhyChooseUs/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
