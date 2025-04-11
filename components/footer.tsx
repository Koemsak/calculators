"use client";

import styles from "./styles";
import { footerLinks, socialMedia } from "../constants";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../app/favicon.ico";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <Image
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-2 max-w-[312px] text-gray-500`}>
          Simplify your life with our free, easy-to-use calculator tools!
          Whether you&apos;re converting units, calculating your BMI, figuring out
          the perfect tip, or planning a loan, we&apos;ve got you covered.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-bold text-[20px] leading-[27px]">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-blue-500 hover:text-blue-700 text-[14px] text-dimWhite cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-2" : "mb-0"
                  }`}
                  onClick={() => window.open(link.link, "_blank")}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t">
      <p className="font-poppins font-normal text-center text-[14px]">
        Copyright © 2025 Calculator Hub. All rights reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Button
            key={social.id}
            variant="secondary"
            size="icon"
            className="cursor-pointer rounded-full mr-2"
            onClick={() => window.open(social.link, "_blank")}
          >
            {social.icon}
          </Button>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
