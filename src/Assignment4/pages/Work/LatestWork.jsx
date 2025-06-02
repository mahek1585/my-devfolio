import React from 'react';
import grocerry from "../../../assets/Images/grocerry.png";
import pokemon from "../../../assets/Images/pokemon.png";
import clickcount from "../../../assets/Images/clickcount.png";
import chefs from "../../../assets/Images/chefs-delight2.png";
import amazon from "../../../assets/Images/amazon.png";

const workItems = [
  { image: grocerry, 
    title: "Apni Grocerry App", 
    reponame: "Apni Grocerry",
    link: "https://github.com/mahek1585/FirstReact-App/tree/assignment2" 
  },
  { image: pokemon, 
    title: "Pokemon Website", 
    reponame: "Pokemon" ,
    link : "https://github.com/mahek1585/React-Projects/tree/Pokemon/src "
  },
  { image: clickcount, 
    title: "ClickCount Application",
    reponame: "ClickCount",
    link: "https://github.com/mahek1585/React-Projects/tree/assignment3"
    },
  { image: chefs, 
    title: "Chef's Delight",
    reponame:"FoodieHub", 
    link: "https://github.com/mahek1585/TailwindDemo/tree/MahekFe/src" 
  },
   { image: amazon, 
    title: "Amazon Home page",
    reponame:"Amazon", 
    link: "https://github.com/mahek1585/AmazonHomePage"
   },
];

const LatestWork = () => {
  return (
    <section className=' min-h-[455px] px-4'>
      <h2 className="font-semibold text-[2rem] leading-12 text-center">What I've Been Building</h2>

      <div className="flex flex-col gap-10 pt-[3.8rem] sm:flex-row sm:flex-wrap sm:justify-center lg:justify-between">
        {workItems.map((item, index) => (
          <div key={index} className="w-[19rem] h-[25.4rem] mx-auto">
            <img src={item.image} alt={item.title} className="h-[315px] mx-auto w-full object-cover" />
            <p className="text-[1.3rem] font-semibold pt-6 leading-8 text-center">{item.title}</p>
            <a
              href={item.link}
              target="_blank"              
              className="text-[1.1rem] leading-[1.7rem] pt-2.5 text-center block text-blue-600 no-underline hover:underline"
            >
            {item.reponame}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
