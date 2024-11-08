import HeroSection from "./HeroSection";
import LatestProducts from "./LatestProducts";
import TopRatedProduct from "./TopRatedProduct";

const Home = () => {
  return (
    <div className=" pb-10 ">
      <HeroSection></HeroSection>
      <LatestProducts></LatestProducts>
      {/* <ContactUs></ContactUs> */}
      <TopRatedProduct />
    </div>
  );
};

export default Home;
