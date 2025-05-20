import React from "react";
import Behance from "../../../assets/Images/Behance.png";
import Google from "../../../assets/Images/Google.png";
import Apple from "../../../assets/Images/Apple.png";
import Dribble from "../../../assets/Images/Dribbble.png";
import Awwward from "../../../assets/Images/Awwwards.png";

const Logo = () => {
  return (
    <div className="w-full flex justify-center py-14">

      <div className="hidden md:flex w-[80rem] justify-between items-center border-y-2 border-[#000000] py-14 px-10">

        <img src={Google} alt="google" className="h-[2rem] w-auto" />
        <img src={Behance} alt="behance" className="h-[2rem] w-auto" />
        <img src={Dribble} alt="dribble" className="h-[2rem] w-auto" />
        <img src={Apple} alt="apple" className="h-[2rem] w-auto" />
        <img src={Awwward} alt="awwward" className="h-[2rem] w-auto" />
      </div>

      <div className="md:hidden grid grid-cols-2 gap-y-14 gap-x-14 justify-items-center w-full max-w-xs border-y-2 border-[#000000]">

        <img src={Google} alt="google" className="h-[2rem] w-auto" />
        <img src={Behance} alt="behance" className="h-[2rem] w-auto" />
        <img src={Dribble} alt="dribble" className="h-[2rem] w-auto" />
        <img src={Apple} alt="apple" className="h-[2rem] w-auto" />
        <div className="col-span-2 flex justify-center">
          <img src={Awwward} alt="awwward" className="h-[2rem] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
