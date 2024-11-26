import React from "react";
// import footerLogo from "../../assets/logo.png";
// import Banner from "../../assets/website/footer-pattern.jpg";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "bottom",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "American Made",
    link: "/",
  },
  {
    title: "Equipment List",
    link: "/",
  },
  {
    title: "Testimonials",
    link: "/",
  },
  {
    title: "CA Transparency Act",
    link: "/",
  },
  {
    title: "Legal Matters",
    link: "/",
  },
  {
    title: "Contact Us",
    link: "/",
  },
  {
    title: "Accessibility",
    link: "/",
  },
  {
    title: "Careers",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
];

const FooterLinks2 = [
  {
    title: "My Account",
    link: "/#about",
  },
  {
    title: "View Cart",
    link: "/",
  },
  {
    title: "FAQ",
    link: "/",
  },
  {
    title: "Turnaround Options",
    link: "/",
  },
  {
    title: "Insider Tips",
    link: "/",
  },
  {
    title: "Video Gallery",
    link: "/",
  },
  {
    title: "Print Templates",
    link: "/",
  },
  {
    title: "Do Not Share or Sell My Information",
    link: "/",
  },
  
];

const FooterLinks3 = [
  {
    title: "Church Resources",
    link: "/",
  },
  {
    title: "E-Commerce Resources",
    link: "/",
  },
  {
    title: "Political Resources",
    link: "/",
  },
  {
    title: "Real Estate Resources",
    link: "/",
  },
  {
    title: "School Resources",
    link: "/",
  },
  {
    title: "Trade Show Resources",
    link: "/",
  },
  
  
];


const FooterLinks4 = [
  {
    title: "Direct Mail Servicest",
    link: "/",
  },
  {
    title: "Every Door Direct Mail",
    link: "/",
  },
  
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
         {/*} <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              {/* <img src={footerLogo} alt="" className="max-w-[50px]" /> *
              ShopMe
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
              beatae ea recusandae blanditiis veritatis.
            </p>
          </div>*/}

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Our Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Support
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks2.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Industry Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks3.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Direct Mail
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks4.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
             
            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>Varanasi, Uttarpradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoCall />
                  <p>+91 63867864949</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
