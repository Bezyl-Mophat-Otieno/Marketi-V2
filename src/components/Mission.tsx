"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { Toast } from "primereact/toast";
const  Mission = ()=>{
const toast = useRef<Toast>(null);

const scrollAnimation = useMemo(() => getScrollAnimation(), []);

const show = ()=>{
  toast.current?.show({ severity: 'info', summary: 'Success', detail: 'You have successfully subscrbed to our NewsLetter', life: 3000 });
}

  
  return (
    <section className="text-gray-600 body-font">
      {/* <Toast ref={toast} position="top-right" /> */}
      <ScrollAnimationWrapper props={{}} className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div variants={scrollAnimation} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            src={"/assets/hero-image1.jpg"}
            alt="hero-section-image"
            width={700}
            height={700}
          />
        </motion.div>
        <motion.div variants={scrollAnimation} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Agent network as a service.
          </h1>
          <p className="mb-8 leading-relaxed">
            Building the biggest agent network to help grow your product
            offering. Helping you offer anything from digital financial services
            to physical products to consumers in Africa.Our platform will help
            you to sell directly to warm consumers anywhere.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              ></label>
              <input
                placeholder="Enter your email address"
                type="text"
                id="subscribe-field"
                name="subscribe-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={show} className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-white-500"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
                Subscribe to Our Newsletter
            </button>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
}

export default Mission;
