import React from 'react'
import Image from "next/image";

function page() {
  return (
    <>
      <div className="Topchoice-main-container  p-18">
       <div className="Topchoice-second-container mt-12 flex flex-col lg:flex-row gap-2 p-12">
      {/*  RIGHT SIDE  */}
       <div className="Topchoice-right-container w-full lg:w-1/2  p-6 bg-gray-50 rounded-xl shadow-lg flex flex-col justify-between">
        <div>
       <h1 className="text-4xl font-bold text-gray-800 mb-4">
    Why Kavelogics is your top choice?
    </h1>
    <p className="text-gray-700 text-1xl font-semibold mt-12">
      At Kavelogics, we specialize in delivering customized software solutions designed to meet your unique business needs. 
      Backed by extensive industry expertise and a commitment to excellence, we ensure the highest standards in every project we undertake.
    </p>
    <h3 className="text-2xl font-semibold text-gray-800 mt-32">
    Ready to Transform Your Business? Contact Us Today for a Free Consultation
    </h3>
  </div>
  <button className="self-start bg-white border border-[#00D280] text-[#00D280] hover:bg-[#00D280] hover:text-white px-6 py-2 mb-2 rounded-full transition-colors duration-300">
    Schedule a Meeting 
  </button>
</div>


        
    {/* ← LEFT SIDE */}
    <div className="Topchoice-left-container lg:w-1/2  relative rounded-xl bg-white ">
  {/* Scrollable content */}
  <div className="overflow-y-auto max-h-[500px] pl-6 pr-4 scrollbar-thin scrollbar-thumb-gray-400 custom-scrollbar">
    <div className="grid gap-6 ">
      {[
        {
          title: "Expertise & Innovation",
          description:
            "With over 5 years of proven experience, Kavelogics crafts customized software solutions powered by certified developers and the latest technologies.",
          icon: "https://kavelogics.com/landing/why-cards/expertise.svg",
        },
        {
          title: "Quality Assurance:",
          description:
            "We ensure robust, reliable, and secure software solutions through thorough testing at every stage. Our commitment to excellence guarantees solutions that exceed expectations.",
          icon: "https://kavelogics.com/landing/why-cards/quality.svg",
        },
        {
          title: "Client-Centric Solutions:",
          description:
            " We prioritize your success through close collaboration, delivering tailored solutions that exceed expectations with innovation and efficiency to drive your business forward.",
          icon: "https://kavelogics.com/landing/why-cards/client.svg",
        },
        {
          title: "Global Reach & Flexibility:",
          description:
            "With global industry expertise, Kavelogics offers flexible engagement models—choose from dedicated teams or project-based solutions tailored to your project scope and budget needs.",
          icon: " https://kavelogics.com/landing/why-cards/global.svg",
        },
      ].map((card, index) => (
        <div key={index} className="border border-gray-200 rounded-xl p-12 shadow-md bg-[#c3eef977]  ">
          <div className="flex items-center gap-4">
            <Image
              src={card.icon}
              alt={`${card.title} Icon`}
              className="w-10 h-14"
            />
            <h1 className="text-3xl font-semibold text-[#00D280]">{card.title}</h1>
          </div>
          <p className="mt-8 text-sm font-bold text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>


  </div>
</div>


    </>
  )
}

export default page
