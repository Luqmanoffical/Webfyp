import React from "react";
import { motion } from "framer-motion";
import { socials } from "../constants/index";

import { Link } from "react-router-dom";
import styles from "../Style";
import { footerVariants } from "../lib/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={` pb-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-col lg:flex-row items-center  px-8 justify-between flex-wrap gap-4 -mt-10">
          <div className="flex justify-center mb-4 md:mb-0">
            <Link to="/">
              <h1 className="text-white font-bold text-lg">FYP</h1>
            </Link>
          </div>

          {/* <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 lg:space-x-10 mb-4 md:mb-0">
            {["/news", "/faqs", "/policy", "/conditions", "/blog"].map(
              (path, index) => {
                const titles = [
                  "Latest News",
                  "FAQs",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Blog",
                ];
                return (
                  <Link
                    key={index}
                    to={path}
                    className={({ isActive }) =>
                      `text-base lg:text-lg font-semibold ${
                        isActive ? "text-purple-600" : "text-white"
                      } hover:text-purple-600 cursor-pointer mb-2 md:mb-0`
                    }
                  >
                    {titles[index]}
                  </Link>
                );
              }
            )}
          </div> */}

          <div className="flex justify-center gap-4 mb-4 md:mb-0">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="text-center mx-5 mt-4">
          <p className="text-[14px] text-white font-normal opacity-50">
            Copyright © 2025 VU FYP. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
