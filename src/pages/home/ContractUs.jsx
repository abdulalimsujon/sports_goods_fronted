const ContactUs = () => {
  return (
    <div className="bg-gray-100 max-w-[1600px] mx-auto mt-10 px-4 sm:px-6 lg:px-8 pb-3">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-center text-2xl sm:text-3xl py-4 text-amber-500">
          Get In Touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div
            className="p-4 sm:p-6 md:p-8 border bg-white rounded-lg shadow-md"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <form action="" className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="p-4 sm:p-6 md:p-8 border bg-white rounded-lg shadow-md flex justify-center items-center"
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
  );
};

export default ContactUs;
