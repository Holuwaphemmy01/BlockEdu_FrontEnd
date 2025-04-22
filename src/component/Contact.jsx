import React from 'react';

const Contact = () => {
    const handleSubmit = (event)=>{}
  return (
    <section className=" mt-7 bg-[#e0e0e0] px-6 py-16 md:px-20 text-gray-800" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0E3EDA]">Contact Us</h2>
        <p className="text-lg mb-8">
          Have a question, feedback, or partnership opportunity? Reach out to us — we're here to help.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <div className="mb-4 flex-1">
              <label
                htmlFor="firstname"
                className="mb-1 text-sm font-semibold text-gray-700 block"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                required
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              />
            </div>

            <div className="mb-4 flex-1">
              <label
                htmlFor="lastname"
                className="mb-1 text-sm font-semibold text-gray-700 block"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                required
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="mb-4 flex-1">
              <label
                htmlFor="email"
                className="mb-1 text-sm font-semibold text-gray-700 block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              />
            </div>
            <div className="mb-4 flex-1">
              <label
                htmlFor="matricId"
                className="mb-1 text-sm font-semibold text-gray-700 block"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="matricId"
                required
                className="w-full h-14 border border-gray-300 rounded-lg px-4 py-2 outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 text-sm font-semibold text-gray-700 block"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Enter your message here..."
              className="w-full h-32 border border-gray-300 rounded-lg px-4 py-2 outline-none"
            ></textarea>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="bg-[#1E88E5] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
