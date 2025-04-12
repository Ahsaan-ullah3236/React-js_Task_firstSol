"use client";
import Image from "next/image";
import { useState } from "react";

function Ourprocess() {
  const [openStage, setOpenStage] = useState<number | null>(null);

  const toggleContent = (stage: number) => {
    setOpenStage(openStage === stage ? null : stage);
  };

  return (
    <div className="OurProcess-main-container p-18">
      <div className="OurProcess-second-container flex flex-col lg:flex-row">
        {/* Left Image Section */}
        <div
          className="OurProcess-left-container flex-shrink-0"
          style={{ height: "1600px", width: "800px" }}
        >
          <Image
            src="https://imagedelivery.net/_hnTXc_Obz89JUELDTH5fg/2d7941c9-7dab-4a63-bb6d-a60ef27b5f00/w=1920,q=75"
            alt="Process Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="OurProcess-right-container bg-[#002f46] justify-center text-1xl text-white p-32 flex-1">
          <h1 className="text-6xl font-semibold mt-24">Our Process</h1>
          <p className="mt-6 text-1xl font-semibold">
            Discover how we build innovative software solutions and high-quality products tailored to your needs.
          </p>

          {/* Stage 1 */}
          <div className="firstDiv mt-6">
            <h2
              className="cursor-pointer rounded-2xl text-black text-3xl py-8 font-semibold transition-all bg-[#fff] pl-12 mt-16"
              onClick={() => toggleContent(1)}
            >
              1. Discovery Stage
            </h2>
            {openStage === 1 && (
              <div className="our-process-content open mt-4">
                <p className="text-lg">
                  We prioritize our clients&apos; success by understanding their unique needs and delivering customized solutions that drive business growth. Our typical workflow includes:
                </p>
                <div className="firstDiv-ky-ander-four-div mt-12">
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Project Understanding</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Stakeholder Interviews</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Project Understanding</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Stakeholder Interviews</p>
                </div>
              </div>
            )}
          </div>

          {/* Stage 2 */}
          <div className="firstDiv mt-6">
            <h2
              className="cursor-pointer rounded-2xl text-black text-3xl py-8 font-semibold transition-all bg-[#fff] pl-12 mt-12"
              onClick={() => toggleContent(2)}
            >
              2. Development Stage
            </h2>
            {openStage === 2 && (
              <div className="our-process-content open mt-4">
                <p className="text-lg">
                  In this stage, we deepen our understanding of the project requirements and create a roadmap for successful delivery. Our approach involves:
                </p>
                <div className="firstDiv-ky-ander-four-div mt-4">
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Business Analysis</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">System Architecture Design</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Project Understanding</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Stakeholder Interviews</p>
                </div>
              </div>
            )}
          </div>

          {/* Stage 3 */}
          <div className="firstDiv mt-6">
            <h2
              className="cursor-pointer rounded-2xl text-black text-3xl py-8 font-semibold transition-all bg-[#fff] pl-12 mt-12"
              onClick={() => toggleContent(3)}
            >
              3. Support and Development
            </h2>
            {openStage === 3 && (
              <div className="mt-4">
                <p className="text-lg">
                  The final phase of the Discovery stage focuses on validation and refining the initial solutions to align with client objectives. Key activities include:
                </p>
                <div className="firstDiv-ky-ander-four-div mt-4">
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Prototype Development</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">User Testing</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Project Understanding</p>
                  <p className="text-2xl bg-[#c3eef977] p-4 rounded-lg mb-3">Stakeholder Interviews</p>
                </div>
              </div>
            )}
          </div>

          {/* Call-to-Action Button */}
          <button className="bg-[#00D280] text-white px-6 py-4 rounded-lg hover:bg-[#00b96a] transition-colors mt-16 text-2xl font-bold">
            Let&apos;s Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ourprocess;
