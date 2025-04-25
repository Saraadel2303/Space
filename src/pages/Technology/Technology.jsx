import React, { useState } from 'react';
import technologyData from '../../Data/technologyData.js';

export default function Technology() {
  const [current, setCurrent] = useState(0);
  const techno = technologyData[current];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white font-sans"
      style={{
        backgroundImage: `url('/technology/background-technology-desktop.jpg')`,
      }}
    >
      <div className="px-6 pt-24 lg:px-24">

        <h1 className="uppercase text-xl font-barlowCondensed tracking-widest text-center lg:text-left mb-10">
          <span className="font-bold opacity-20 mr-4">03</span> SPACE LAUNCH 101
        </h1>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 w-full lg:w-3/5">
          
            <div className="flex lg:flex-col gap-8">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-14 h-14 rounded-full border border-white text-2xl font-bellefair transition ${
                    current === i
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-gray-300/30'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-3xl uppercase text-gray-500 mb-4 font-barlowCondensed tracking-widest">
                The terminology…
              </h3>
              <h1 className="text-4xl md:text-6xl uppercase font-bellefair mb-6">{techno.name}</h1>
              <p className="text-[#D0D6F9] leading-relaxed font-barlow text-lg">{techno.description}</p>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <img
           src={techno.image}
           alt={techno.name}
           className="w-[300px] md:w-[400px] lg:w-[450px] object-contain lg:ml-auto"
         />
   
        </div>
        </div>
      </div>
    </div>
  );
}



