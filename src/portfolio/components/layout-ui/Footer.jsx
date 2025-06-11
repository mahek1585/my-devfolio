import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="px-14 pb-4">
      <div  id ="contact" className=" flex flex-col md:flex-row gap-20 md:gap-[15rem] justify-between border-t border-t-black pt-16">
        <div className="">
          <h2 className="font-semibold text-3xl mb-10">Let’s work together</h2>
          <p className="mb-14">
            I'm always excited to collaborate on interesting projects or internships. 
            Whether it's web development or design, feel free to reach out and let's build something great together.

          </p>
           <div className="flex gap-4 text-4xl">
                      <a
                        href="https://www.linkedin.com/in/mahekshaikh26"
                        target="_blank"
                        className="text-gray-700 hover:text-blue-600"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a
                        href="https://www.instagram.com/mahekshaikh8877?igsh=MXdod3NoOHZrN2cyMw=="
                        target="_blank"
                        className="text-gray-700 hover:text-pink-500"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a
                        href="https://github.com/mahek1585"
                        target="_blank"
                        className="text-gray-700 hover:text-black"
                      >
                         <FontAwesomeIcon icon={faGithub} />
                     </a>
                    
                 </div>
        </div>
        <form className="flex flex-1 items-start md:min-w-[32rem]">
          <div className="flex flex-1 flex-col gap-5 ">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
            />
            <textarea
              name=""
              placeholder="Type your message here"
              rows={8}
              className="bg-[#F3F3F3] py-5 px-7 placeholder:text-black"
              id=""
            ></textarea>
            <button
              type="submit"
              className="font-semibold p-6 min-w-[13rem] self-start bg-black text-white cursor-pointer"
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


