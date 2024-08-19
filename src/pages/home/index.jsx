import HeroSection from "./HeroSection";
import LatestProducts from "./LatestProducts";
import ContactUs from "./ContractUs";

const Home = () => {
  return (
    <div className=" pb-10 ">
      <HeroSection></HeroSection>
      <LatestProducts></LatestProducts>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
