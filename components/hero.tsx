import React from "react";
import styles from "./styles";
import robot from "@/assets/robotic-process.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col max-w-5xl w-full`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-lg font-bold tracking-tight lg:text-4xl md:text-3xl sm:text-2xl flex-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
            All-in-One Calculator Hub
          </h1>
        </div>
        <p className={`opacity-50 text-[12px] lg:text-base mt-5`}>
          Simplify your life with our free, easy-to-use calculator tools!
          Whether you're converting units, calculating your BMI, figuring out
          the perfect tip, or planning a loan, we’ve got you covered. No
          sign-ups, no fees—just fast, accurate results at your fingertips.
          Explore our four powerful tools below and start solving everyday
          problems today!
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Image src={robot} alt="robot" width={400} height={400} />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
