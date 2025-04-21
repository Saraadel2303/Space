import React, { useState } from 'react'
import destinations from '../../Data/Destinations'


export default function Destination() {

  const [current, setCurrent] = useState(0);
  const planet = destinations[current];

  
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat text-white font-sans flex flex-col"
    style={{ backgroundImage: "url('/destination/background-destination-desktop.jpg')" }}>
    
    <div  className="flex-grow flex flex-col px-4 py-20 md:px-16 lg:px-24">
      
    <h2 className="uppercase text-xl tracking-widest text-center md:text-left mb-20 pt-3">
      <span className="font-bold opacity-30 mr-4">01</span> Pick your destination
    </h2>

    <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 max-w-7xl w-full mx-auto">
      
      <img
        src={planet.image}
        alt={planet.name}
        className="w-full max-w-xs md:max-w-md lg:max-w-lg max-h-[400px] object-contain"
      />

      <div className="text-center lg:text-left max-w-xl">
        
        <div className="flex justify-center lg:justify-start gap-6 mb-6">
          {destinations.map((dest, index) => (
            <button
              key={index}
              className={`uppercase tracking-widest text-sm pb-2 border-b-2 transition-all duration-300 ${
                current === index
                  ? "border-white text-white"
                  : "border-transparent text-gray-400 hover:border-white hover:text-white"
              }`}
              onClick={() => setCurrent(index)}
            >
              {dest.name}
            </button>
          ))}
        </div>

        <h1 className="text-[56px] md:text-[80px] font-bellefair uppercase mb-4">
          {planet.name}
        </h1>

        <p className="text-lg text-[#D0D6F9] leading-relaxed border-b border-gray-600 pb-8 mb-8">
          {planet.description}
        </p>

        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-8 text-center">
          <div>
            <h3 className="text-sm tracking-widest text-[#D0D6F9] uppercase">Avg. Distance</h3>
            <p className="text-2xl font-bellefair uppercase">{planet.distance}</p>
          </div>
          <div>
            <h3 className="text-sm tracking-widest text-[#D0D6F9] uppercase">Est. Travel Time</h3>
            <p className="text-2xl font-bellefair uppercase">{planet.travel}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </main>
  )
  
}
