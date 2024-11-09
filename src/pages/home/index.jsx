import HeroSection from "./HeroSection";
import LatestProducts from "./LatestProducts";
import NewItem from "./NewItem";
import TopRatedProduct from "./TopRatedProduct";

const Home = () => {
  return (
    <div className="pb-10 ">
      <HeroSection></HeroSection>
      <LatestProducts></LatestProducts>
      {/* <Try></Try> */}
      <NewItem></NewItem>
      <TopRatedProduct />
    </div>
  );
};

export default Home;
