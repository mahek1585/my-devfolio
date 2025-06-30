
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#fefefe] to-[#f2f4f7] border-t border-gray-300 px-6 md:px-24 pt-16 pb-6">
      <div className="flex flex-col md:flex-row justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-[#2D2D2D]">
            Let’s work together
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            I'm always excited to collaborate on interesting projects or
            internships. Whether it's web development or design, feel free to
            reach out and let's build something great together.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/mahekshaikh26"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-9 h-9 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.instagram.com/mahekshaikh8877?igsh=MXdod3NoOHZrN2cyMw=="
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <img
                src=  "https://cdn-icons-png.flaticon.com/512/174/174855.png"
                alt="Instagram"
                className="w-9 h-9 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://github.com/mahek1585"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
                className="w-9 h-9 hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex-1 max-w-xl w-full bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-[#F3F3F3] py-4 px-6 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#009379]"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-[#F3F3F3] py-4 px-6 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#009379]"
            />
            <textarea
              placeholder="Type your message here..."
              rows={6}
              required
              className="bg-[#F3F3F3] py-4 px-6 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#009379]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#009379] hover:bg-[#007c64] text-white font-semibold py-3 px-6 rounded-md transition disabled:bg-gray-400 disabled:cursor-not-allowed w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
