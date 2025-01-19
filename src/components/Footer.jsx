import React from "react";
import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-[#011B5B] text-white py-16 px-8 lg:py-32 lg:px-16">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between">
        {/* Left Section */}
        <div className="lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0">
          <p className="text-[#AAB5CD] font-medium text-sm w-60  lg:text-base">
            Design outstanding interfaces with advanced Figma features in a matter of minutes.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-2xl">
            <BsFacebook className="cursor-pointer hover:text-gray-400 transition-colors " />
            <FaGoogle className="cursor-pointer hover:text-gray-400 transition-colors" />
            <FaApple className="cursor-pointer hover:text-gray-400 transition-colors" />
            <FaInstagram className="cursor-pointer hover:text-gray-400 transition-colors" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-12 lg:gap-16 w-full lg:w-2/3">
          {[
            {
              title: "START A BUSINESS",
              links: ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"],
            },
            {
              title: "GOVERNMENT REGISTRATION",
              links: ["Partners", "Community", "Developers", "App", "Blog"],
            },
            {
              title: "COMPLIANCE & TAX",
              links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
            },
            {
              title: "BIS & CDSCO",
              links: ["About Us", "News", "Leadership", "Media Kit"],
            },
          ].map((section, idx) => (
            <div key={idx} className="text-center lg:text-left">
              <h3 className="font-bold text-[#FFA229] mb-4">{section.title}</h3>
              <ul className="space-y-2 text-[#AAB5CD] font-medium text-sm lg:text-base">
                {section.links.map((link, index) => (
                  <li key={index} className="hover:text-white cursor-pointer transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-32 text-center relative">
        {/* Back to Top Button */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-14 w-12 h-12 bg-[#FFA229] text-white rounded-full flex justify-center items-center cursor-pointer">
          <span className="text-lg font-bold">&#8679;</span>
        </div>

        <p className="text-[#AAB5CD]">
          &copy; 2024 Registerkaro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
