import React from 'react';
import freeBird from "../../../assets/Images/freeBird.png";
import purplehaze from "../../../assets/Images/purplehaze.png";
import gotMe from "../../../assets/Images/gotMe.png";
import girl from "../../../assets/Images/girl.png";
import lotalove from "../../../assets/Images/lotalove.png";
import pressure from "../../../assets/Images/pressure.png";

const workItems = [
  { image: freeBird, title: "Free Bird", artist: "Lynyrd Skynyrd" },
  { image: purplehaze, title: "Purple Haze", artist: "Jimi Hendrix" },
  { image: gotMe, title: "You Really Got Me", artist: "The Kinks" },
  { image: girl, title: "American Girl", artist: "Tom Petty" },
  { image: lotalove, title: "Whole Lotta Love", artist: "Led Zeppelin" },
  { image: pressure, title: "Under Pressure", artist: "Queen" },
];

const LatestWork = () => {
  return (
    <section className='-mt-[50px] min-h-[455px] px-4'>
      <h2 className="font-semibold text-[2rem] leading-12 text-center">My latest work</h2>

      <div className="flex flex-col gap-10 pt-[3.8rem] sm:flex-row sm:flex-wrap sm:justify-center lg:justify-between">
        {workItems.map((item, index) => (
          <div key={index} className="w-[19rem] h-[25.4rem] mx-auto">
            <img src={item.image} alt={item.title} className="h-[315px] mx-auto" />
            <p className="text-[1.3rem] font-semibold pt-6 leading-8 text-center">{item.title}</p>
            <p className="text-[1.1rem] leading-[1.7rem] pt-2.5 text-center">{item.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
