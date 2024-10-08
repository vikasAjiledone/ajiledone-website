import React from "react";

const Contactus = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 my-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden xxl:flex xl:flex lg:flex md:flex">
        <div className="xxl:w-1/2 xl:w-1/2 lg:w-1/2 bg-white p-8 text-black">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We would love to hear from you! Please fill out the form on the
            right to get in touch with us.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H8m0 0l-3 3m3-3l-3-3"
                ></path>
              </svg>
              <span>
                8th floor, Co-offiz Magnum Tower-1, Sector 58, Gurugram, Haryana
                122011
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.77 2.78L21.22 21.23M21 11.61V21.07a.92.92 0 01-.92.92H3.92A.92.92 0 013 21.07V7.61c0-.51.41-.92.92-.92h.01M9 5v5m5-5v.01"
                ></path>
              </svg>
              <span>info@ajiledone.com</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h1m5 0h1m7-4h1m5 0h1m-6 14v2m0-4v2m0-8v2m0-4v2m0-8v2m0 2v2"
                ></path>
              </svg>
              <span>+91 9315473097</span>
            </div>
          </div>
        </div>
        <div className="xxl:w-1/2 xl:w-1/2 lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
