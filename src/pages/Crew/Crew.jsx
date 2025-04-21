import React, { useState } from 'react';
import crewData from '../../Data/crewData';

export default function Crew() {
  
  const [selected, setSelected] = useState(0);
  const crew = crewData[selected];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white font-sans flex flex-col"
      style={{ backgroundImage: "url('/crew/background-crew-desktop.jpg')" }}
    >
      <div className="flex-grow flex flex-col px-4 py-28 md:px-16 lg:px-24">

        <h1 className="uppercase text-xl tracking-widest font-barlowCondensed text-center md:text-left mb-8">
          <span className="font-bold opacity-30  mr-4">02</span> Meet your crew
        </h1>

        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10 md:gap-20 max-w-7xl w-full mx-auto">

          <img
            src={crew.image}
            alt={crew.name}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg max-h-[400px] object-contain"
          />

          <div className="text-center md:text-left space-y-6 max-w-xl">

            <h2 className="text-lg md:text-2xl text-gray-400 uppercase font-bellefair tracking-wider"> 
              {crew.role}
            </h2>

            <h1 className="text-3xl md:text-5xl uppercase font-bellefair">{crew.name}</h1>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-barlowCondensed w-2/3">
              {crew.description}
            </p>

            <div className="flex justify-center md:justify-start gap-3 pt-16">
              {crewData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition ${
                    selected === index ? "bg-white" : "bg-gray-500 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelected(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
