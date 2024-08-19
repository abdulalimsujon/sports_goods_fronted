const ContactUs = () => {
  return (
    <div className="bg-gray-100 max-w-[1600px] mx-auto mt-10">
      <div className="container flex justify-center items-center">
        <div className="ml-8">
          <h1 className="text-center text-4xl py-5 text-amber-500">
            Get In Touch
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3  mx-auto p-8">
            <div
              className="p-8 md:p-20 border"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <form action="" className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 btn btn-primary text-white font-bold rounded-lg hover:bg-amber-500 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div
              className="p-5 border flex justify-center items-center"
              data-aos="zoom-out-left"
              data-aos-duration="2000"
            >
              <img
                src="https://i.ibb.co/VWGHL78/tttt.jpg"
                alt="Contact"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
