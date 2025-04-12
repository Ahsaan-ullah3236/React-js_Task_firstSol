import React from 'react'
import Image from "next/image";

function page() {
  return (
    <>
      <div className="success-main-container  h-[100vh] flex items-center justify-center overflow-auto mt-20">
        <div className="second-container-for-both w-[80%] text-center">
          <h1 className="flex w-6xl text-center text-7xl font-semibold ml-96 pl-12 mb-12">
            Elevating Success In The Digital Sphere
          </h1>

          {[1, 2].map((_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center flex-wrap">
              {[1, 2, 3, 4].map((_, imgIndex) => {
                const images = [
                  "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d639d50a-fbb0-4c0e-5426-6d2276563400/w=1920,q=75",
                  "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2980e6fb-5749-45c8-b61d-e76f46a08000/w=1920,q=75",
                  "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/9c74b64e-cbc4-4ac2-5a86-da9f4e5f6500/w=1920,q=75",
                  "https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/d7e2df5d-f7b6-455b-3426-d9085bef7b00/w=1920,q=75"
                ];

                return (
                  <div
                    key={imgIndex}
                    className="relative group w-[450px] h-[400px] overflow-hidden shadow-lg"
                  >
                    {/* Image with lower opacity */}
                    <Image
                      src={images[imgIndex]}
                      alt=""
                      className="w-full h-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Full overlay content box with background */}
                    <div className="absolute inset-0 flex flex-col justify-end px-6 py-4 transition-all duration-700 ease-in-out group-hover:bg-blue-600/30">
                      {/* E-commerce text */}
                      <div className="mb-2 transform transition-transform duration-700 ease-in-out group-hover:-translate-y-40">
                        <p className="text-4xl text-white font-bold ">E-commerce</p>
                      </div>

                      {/* Bottom content */}
                      <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out delay-200">
                        <p className="text-white text-1xl text-justify font-bold mb-4">
                          We try to drive efficiency and growth through tailored software solutions that optimize operations and enhance productivity.
                        </p>
                        <a href="#" className="text-2xl text-[#00D280] font-bold">Learn more</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page
