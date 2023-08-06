import React, { useContext } from "react";
// import components
import CountryDropDown from "./CountryDropdown";
import PropertyDropDown from "./PropertyDropdown";
import PriceRangeDropDown from "./PriceRangeDropdown";
import { HouseContext } from "./HouseContext";

// import icons
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  // const { houses } = useContext(HouseContext);
  const { handleClick } = useContext(HouseContext);

  return (
    <div style={{position: "abolute", top: "10rem"}} className="text-purple-600 px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white rounded-lg">
      <CountryDropDown />
      <PropertyDropDown />
      <PriceRangeDropDown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
