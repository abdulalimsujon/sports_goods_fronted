const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the subject"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-600 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
