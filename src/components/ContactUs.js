export default function ContactUs() {
  return (
    <section id="contact" className="bg-green-200 text-black py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFD700]">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
        <form className="mt-12 space-y-6 max-w-3xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
              />
            </div>
            <div className="relative flex-1 mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
              />
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#FFD700] text-black"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#FFD700] text-black font-bold rounded shadow-lg transform transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
