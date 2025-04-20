import React from 'react'
import "../Home/Home.css"

export default function Home() {
  return (
   <>
   <section className="home flex items-end md:items-center justify-center min-h-screen text-white px-6 md:px-16 pt-20 md:pt-32">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-end">
    
    <div className="text-center md:text-left space-y-6">
      <h2 className="text-xl md:text-2xl text-light tracking-widest uppercase font-barlowCondensed">
        So, you want to travel to
      </h2>

      <h1 className="text-7xl md:text-[130px] font-bellefair uppercase">
        Space
      </h1>

      <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed font-barlow">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>

    <div className="flex justify-center md:justify-end items-end">
      <div className="explore-btn w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-white text-black rounded-full flex justify-center items-center text-xl md:text-2xl font-bellefair cursor-pointer hover:ring-[40px] hover:ring-[#ffffff22] transition-all duration-500">
        EXPLORE
      </div>
    </div>
  </div>
</section>

   </>
  )
}
