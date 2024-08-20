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

        <div className="absolute inset-0 flex items-center justify-start px-5 md:px-10 lg:px-20">
          <div className="bg-white bg-opacity-60 p-4 md:p-8 rounded-md max-w-lg md:max-w-xl lg:max-w-2xl space-y-4">
            <h1
              className="text-2xl md:text-4xl lg:text-5xl text-amber-500 font-extrabold"
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Special Winter Collection
            </h1>

            <div className="mt-2 md:mt-4">
              <span
                id="text"
                className="text-lg md:text-2xl lg:text-3xl text-amber-500"
              ></span>
            </div>

            <p
              className="text-xs md:text-sm lg:text-base xl:text-lg text-justify text-gray-800"
              data-aos="fade-up-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              We are offering an enormous deal this season! If you are thinking
              about upgrading your sports equipment, now is the perfect time.
              With unbeatable prices and a wide selection of top-quality gear,
              you will find everything you need to elevate your game. Dont miss
              out on these limited-time offers!
            </p>

            <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-800">
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
