import { useEffect } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed("#text", {
      strings: ["Offer is going On..."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup function to destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="carousel w-full h-screen pb-5 mt-28">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/7NvNkC2/image1.webp"
          className="w-full h-full object-cover"
          alt="Special winter collection"
        />
        <div className="absolute inset-0 flex items-center justify-start px-5 md:px-10 lg:px-20">
          <div className="bg-white bg-opacity-60 p-4 md:p-8 rounded-md max-w-lg md:max-w-xl lg:max-w-2xl space-y-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-amber-500 font-extrabold">
              Special Winter Collection
            </h1>
            <div className="mt-2 md:mt-4">
              <span
                id="text"
                className="text-lg md:text-2xl lg:text-3xl text-amber-500"
              ></span>
            </div>
            <p className="text-xs md:text-sm lg:text-base xl:text-lg text-justify text-gray-800">
              We are offering an enormous deal this season! If you are thinking
              about upgrading your sports equipment, now is the perfect time.
              With unbeatable prices and a wide selection of top-quality gear,
              you will find everything you need to elevate your game. Don't miss
              out on these limited-time offers!
            </p>
            <button
              onClick={() => navigate("/allproducts")}
              className="btn btn-primary"
            >
              Shop Now
            </button>
          </div>
        </div>
        {/* Carousel navigation buttons */}
        <a
          href="#slide3"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <IoIosArrowBack />
        </a>
        <a
          href="#slide2"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <IoIosArrowForward />
        </a>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/mXjv7DP/sg2.webp"
          className="w-full h-full object-cover"
          alt="Exclusive deals"
        />
        <div className="absolute inset-0 flex items-center justify-start px-5 md:px-10 lg:px-20">
          <div className="bg-white bg-opacity-60 p-4 md:p-8 rounded-md max-w-lg md:max-w-xl lg:max-w-2xl space-y-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-amber-500 font-extrabold">
              Exclusive Deals for the Season
            </h1>
            <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-800">
              Discover our special selection of products tailored to meet your
              needs, only available for a limited time!
            </p>
            <button
              onClick={() => navigate("/allproducts")}
              className="btn btn-primary"
            >
              Shop Now
            </button>
          </div>
        </div>
        <a
          href="#slide1"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <IoIosArrowBack />
        </a>
        <a
          href="#slide3"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          <IoIosArrowForward />
        </a>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/mXjv7DP/sg2.webp"
          className="w-full h-full object-cover"
          alt="New Arrivals"
        />
        <div className="absolute inset-0 flex items-center justify-start px-5 md:px-10 lg:px-20">
          <div className="bg-white bg-opacity-60 p-4 md:p-8 rounded-md max-w-lg md:max-w-xl lg:max-w-2xl space-y-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-amber-500 font-extrabold">
              New Arrivals for the Winter
            </h1>
            <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-800">
              Check out our latest products that are perfect for the winter
              season. Gear up with the newest arrivals!
            </p>
            <button
              onClick={() => navigate("/allproducts")}
              className="btn btn-primary"
            >
              Shop Now
            </button>
          </div>
        </div>

        <a
          href="#slide2"
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black text-white text-4xl p-4 rounded-full shadow-lg hover:bg-amber-500 transition duration-300 ease-in-out"
        >
          <IoIosArrowBack />
        </a>
        <a
          href="#slide1"
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black text-white text-4xl p-4 rounded-full shadow-lg hover:bg-amber-500 transition duration-300 ease-in-out"
        >
          <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
