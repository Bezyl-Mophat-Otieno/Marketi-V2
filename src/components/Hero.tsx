"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import Link from "next/link";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Served",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper className="">
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
      <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-bold">
        Empowering African SMB's{" "}
        <br className="hidden lg:inline-block" />
        scale faster.
      </h1>
      <p className="mb-8 text-lg leading-relaxed">
        We're on a mission to build the operating system for SMB's, enabling them to start and scale within the AFCTA region. 
        Experience everything you need to start selling in Africa and unlock abundance for your business.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
          <Link href="#services">Learn More</Link>
        </button>
      </div>
      </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src={"http://res.cloudinary.com/dfukupatj/image/upload/v1709279690/miqc27hk5kfjywy8ts8d.png"}
                alt="hero-section-image"
                width={800}
                height={800}
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
