import React from "react";

const ButtonOutline = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500  text-black-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange hover: ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;