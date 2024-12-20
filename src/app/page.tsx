import Navbar from "./components/Navbar";
import HomeComp from "./Home";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FifthSection from "./FifthSection";
import Form from "./components/Form";
import WhyUs from "./WhyUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HomeComp />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FifthSection />
    <Form />
    <WhyUs />
    <Footer />
    </>
  );
}
