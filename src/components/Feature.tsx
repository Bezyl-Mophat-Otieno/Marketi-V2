"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const features = [
  "Compliance Tools",
  "Payment Repatriation",
  "Business Development",
  "Settlement Tools",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end" props={{}}>
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/service-img.jpg"
              alt="VPN Illustrasi"
              height={700}
              width={700}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="" props={{}}>
          <motion.div
            className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              Unlock the Power of Maketi for Your Business.
              </h3>
              <p className="my-2 text-black-500">
              Maketi is more than just a platform – it's your gateway to success in the African commerce landscape. Here's why you should choose Maketi to supercharge your business:
              </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list cursor-pointer"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
