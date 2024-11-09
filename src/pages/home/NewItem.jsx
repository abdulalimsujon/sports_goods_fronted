import Carousel from "../../components/utilities/Carousel";
import image from "../../assets/images/sport10.jpg";
import image2 from "../../assets/images/sport11.jpg";
import image4 from "../../assets/images/sport14.jpg";

const Slide1 = () => (
  <div className="h-96 w-[500px] relative flex items-center justify-center text-white text-2xl">
    {/* Group container to trigger hover effect */}
    <div className="group w-full h-full flex justify-center items-center relative overflow-hidden">
      {/* First image (will slide out to the right) */}
      <div className="absolute inset-0 transform group-hover:translate-x-[100%] transition-transform duration-500">
        <img
          src={image}
          alt="Sport 10"
          className="w-full h-full object-cover p-4"
        />
      </div>

      {/* Second image (will slide in from the left) */}
      <div className="absolute inset-0 flex justify-center items-center transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 bg-gray-100">
        <div className="w-[300px] h-[500px] mx-auto">
          <img src={image4} alt="Sport 11" className="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
);

const Slide2 = () => (
  <div className="h-96 w-[500px] relative flex items-center justify-center text-white text-2xl">
    {/* Group container to trigger hover effect */}
    <div className="group w-full h-full flex justify-center items-center relative overflow-hidden">
      {/* First image (will slide out to the right) */}
      <div className="absolute inset-0 transform group-hover:translate-x-[100%] transition-transform duration-500">
        <img
          src={image}
          alt="Sport 10"
          className="w-full h-full object-cover p-4"
        />
      </div>

      {/* Second image (will slide in from the left) */}
      <div className="absolute inset-0 flex justify-center items-center transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 bg-gray-100">
        <div className="w-[300px] h-[500px] mx-auto">
          <img src={image2} alt="Sport 11" className="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="h-96 w-[500px] relative flex items-center justify-center text-white text-2xl">
    {/* Group container to trigger hover effect */}
    <div className="group w-full h-full flex justify-center items-center relative overflow-hidden">
      {/* First image (will slide out to the right) */}
      <div className="absolute inset-0 transform group-hover:translate-x-[100%] transition-transform duration-500">
        <img
          src={image}
          alt="Sport 10"
          className="w-full h-full object-cover p-4"
        />
      </div>

      {/* Second image (will slide in from the left) */}
      <div className="absolute inset-0 flex justify-center items-center transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 bg-gray-100">
        <div className="w-[300px] h-[500px] mx-auto">
          <img src={image4} alt="Sport 11" className="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
);

const NewItem = () => {
  return (
    <div className="max-w-[1620px] bg-gray-100 mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-16 lg:pl-48">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative group">
          <img
            src="https://i.ibb.co.com/vZyRZvq/7.jpg"
            alt="New Item"
            className="transition duration-300 group-hover:blur-sm max-w-full sm:w-[300px] md:w-[400px] lg:w-[500px]"
          />
        </div>

        {/* Text and Carousel Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center space-y-6 lg:mr-48">
          <div>
            <h1 className="font-bold text-2xl md:text-3xl">New items</h1>
            <h2 className="text-lg">Spring and Summer Collection @2024</h2>
          </div>
          <div className="w-full max-w-md mx-auto">
            <Carousel autoSlide={true} autoSlideInterval={2000}>
              {[
                <Slide1 key="slide1" />,
                <Slide2 key="slide2" />,
                <Slide3 key="slide3" />,
              ]}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
