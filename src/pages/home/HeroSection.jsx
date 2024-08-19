import { useEffect } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";

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
    <div className="carousel w-full h-screen pb-5">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/c8VJwk8/man-running-with-blue-flowing-wave-1017-9202.jpg"
          className="w-full h-full object-cover"
          alt="Special winter collection"
        />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <div className="ml-8 md:ml-48 space-y-4 md:space-y-8 p-4 bg-opacity-50 rounded-md max-w-lg md:max-w-2xl">
            <h1
              className="text-2xl md:text-5xl text-amber-500 font-extrabold "
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Special Winter Collection
            </h1>

            <div className="mt-5">
              <span
                id="text"
                className="text-xl md:text-3xl text-amber-500 "
              ></span>
            </div>

            <p
              className="text-sm md:text-xl text-justify text-gray-800"
              data-aos="fade-up-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              We are offering an enormous deal this season! If you are thinking
              about upgrading your sports equipment, now is the perfect time.
              With unbeatable prices and a wide selection of top-quality gear,
              you will find everything you need to elevate your game. Don’t miss
              out on these limited-time offers!
            </p>

            <p className="text-sm md:text-xl text-gray-800">
              Lets start your shopping
            </p>
            <button
              onClick={() => navigate("/allproducts")}
              className="btn btn-primary"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
