import { TfiEmail } from "react-icons/tfi";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16">
      {/* ABOUT Section */}
      <div className="py-12 bg-gray-100 max-w-[1600px] mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-amber-300">
              About Our Company
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              We are dedicated to providing top-quality products and services
              that exceed our expectations. Our commitment to excellence is
              reflected in every project we undertake.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-700">
                Our mission is to deliver innovative and high-quality products
                that enhance the lives of our customers. We strive to be leaders
                in our industry by continuously improving our processes and
                embracing new technologies.
              </p>
            </div>

            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-700">
                Our vision is to be a global leader in our field, recognized for
                our commitment to quality, customer satisfaction, and
                sustainable practices. We aim to make a positive impact on the
                world through our products and services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="mt-20 max-w-[1580px] mx-auto">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-2 p-1 border bg-slate-50 text-amber-300s text-amber-300">
          Our Team
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center bg-white">
          <div className="flex-1 p-4 border">
            <div
              className="relative mx-auto"
              style={{ height: "400px", width: "300px" }}
            >
              <img
                className="object-cover"
                style={{ height: "400px", width: "300px" }}
                src="https://i.ibb.co/T26QdqM/friendly-young-business-student-entrepreneur-260nw-2257917031.webp"
                alt="Team Member 1"
              />
            </div>

            <div className="bg-amber-200 p-4">
              <h2 className="text-center text-2xl font-bold mb-2">
                Chef Excutor
              </h2>
              <p className="text-center">
                Our team is ready to treat you with a good product of sports. We
                are committed to delivering excellence in every interaction,
                ensuring you get the best service.
              </p>
            </div>
          </div>

          <div className="flex-1 p-4 border">
            <div
              className="relative mx-auto"
              style={{ height: "400px", width: "300px" }}
            >
              <img
                className="object-cover"
                style={{ height: "400px", width: "300px" }}
                src="https://i.ibb.co/Zh1cQK8/photo-2023-09-03-19-55-32.jpg"
                alt="Team Member 2"
              />
            </div>

            <div className="bg-amber-200 p-4">
              <h2 className="text-center text-2xl font-bold mb-2">
                Senior Instructor
              </h2>
              <p className="text-center">
                Our dedicated team is passionate about providing top-quality
                sports products. We strive to exceed your expectations, ensuring
                every experience is both satisfying and rewarding.
              </p>
            </div>
          </div>

          <div className="flex-1 p-4 border ">
            <div
              className="relative mx-auto"
              style={{ height: "400px", width: "300px" }}
            >
              <img
                className="object-cover "
                style={{ height: "400px", width: "300px" }}
                src="https://i.ibb.co/71wcwV6/beautiful-brunette-business-woman-entrepreneur-260nw-2256752029.webp"
                alt="Team Member 3"
              />
            </div>

            <div className="bg-amber-200 p-4">
              <h2 className="text-center text-2xl font-bold mb-2">
                Team Leader
              </h2>
              <p className="text-center">
                We take pride in offering the finest sports products, backed by
                a team that values your satisfaction. Trust us to deliver
                exceptional service and quality every time. .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 bg-base-200">
        {/* Address Section */}
        <div className="lg:w-1/2 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Our Location
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Daffodil Smart City, House No 53, Chapai
          </p>
          <p className="text-lg text-gray-600 mb-2">Rajshahi, Bangladesh</p>
          <p className="text-lg text-gray-600 mb-4">Phone: 01301567011</p>
          <p className="text-lg text-gray-600 mb-4">
            Email: info@daffodilsmartcity.com
          </p>
          <button className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-300 transition">
            Contact Us
          </button>
        </div>
        s{/* Map Section */}
        <div className="lg:w-1/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14593.57863500969!2d90.31000204542204!3d23.875620178955142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c23dd12bbc75%3A0x313d214552eabe56!2sDaffodil%20Smart%20City!5e0!3m2!1sen!2sbd!4v1723852183038!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Contact Us Section */}
      <section
        id="contract"
        className="bg-base-200 py-10 text-black mt-20 mb-10 "
      >
        <div className="container mx-auto pb-10">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 text-amber-300">
            Contact Us
          </h1>
          <div className="flex flex-col lg:flex-row justify-center gap-10">
            <div className="lg:w-1/3 text-center">
              <div className="w-20 h-20 mx-auto flex justify-center items-center rounded-full bg-white">
                <FaRegAddressCard size={25} />
              </div>
              <h5 className="text-xl font-semibold mt-4">Address</h5>
              <p>House No 53, Chapai</p>
              <p>Rajshahi, Bangladesh</p>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="w-20 h-20 mx-auto flex justify-center items-center rounded-full bg-white">
                <TfiEmail size={25} />
              </div>
              <h5 className="text-xl font-semibold mt-4">Email</h5>
              <p>alimsujon12@gmail.com</p>
              <p>abdul15-3772@diu.edu.bd</p>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="w-20 h-20 mx-auto flex justify-center items-center rounded-full bg-white">
                <FaPhoneFlip size={25} />
              </div>
              <h5 className="text-xl font-semibold mt-4">Phone</h5>
              <p>01301567011</p>
              <p>Telephone: 9654326</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
