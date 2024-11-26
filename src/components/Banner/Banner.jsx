import React from "react";
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto  object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              
              Your Trusted Source for All Your Online Printing Needs
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Our roots grew out of a print shop in Arlington, TX and we are proud to still do all of our printing and manufacturing on American soil. 

PrintPlace simplifies online printing. Upload designs, select options, and track orders in one place. We aim to make printing seamless so you can focus on growing your business.

Our customers trust our online printing services and the professional quality of our custom offset printing. Our low prices and fast turnaround times are backed by 5 guarantees.

Our products, layout templates, and informative articles will help you design and print your best marketing materials. You’ll quickly realize why our slogan is “Passionate about Printing.”
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
