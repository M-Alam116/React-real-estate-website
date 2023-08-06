import React from "react";
import Image from "../assets/img/home.jpg";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section
      className="h-full max-h-[640px] mb-8 xl:mb-24"
      style={{
        background: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "50rem",
      }}
    >
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
          height: "fit-content",
        }}
        className="backdrop-blur-sm lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0"
      >
        <h1 className="text-4xl lg:text-[40px] font-semibold leading-none mb-6 mt-20 text-center">
          <span className="text-violet-700">Rent</span> Your Dream House With
          Us.
        </h1>

        {/* <div className="hidden flex-1 lg:flex justify-end items-end mr-5">
          <img src={Image} alt=''/>
        </div> */}
      </div>
      <Search />
    </section>
  );
};

export default Banner;
