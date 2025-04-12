"use client";
import Image from "next/image";
import React from "react";


const technologiesRow1 = [
  { name: "React", icon: "https://kavelogics.com/landing/technologies/react.svg" },
  { name: "JavaScript", icon: "https://kavelogics.com/landing/technologies/js.svg" },
  { name: "TypeScript", icon: "https://kavelogics.com/landing/technologies/ts.svg" },
  { name: "Android", icon: "https://kavelogics.com/landing/technologies/android.svg" },
  { name: "TypeScript", icon: "https://kavelogics.com/landing/technologies/ts.svg" },
];

const technologiesRow2 = [
  { name: "Node.js", icon: "https://kavelogics.com/landing/technologies/flutter.svg" },
  { name: "Express", icon: "https://kavelogics.com/landing/technologies/flutter.svg" },
  { name: "NestJS", icon: "https://kavelogics.com/landing/technologies/electron.svg" },
  { name: "MongoDB", icon: "https://kavelogics.com/landing/technologies/angular.svg" },
  { name: "PostgreSQL", icon: "https://kavelogics.com/landing/technologies/wordpress.svg" },
];

const technologiesRow3 = [
  { name: "Docker", icon: "https://kavelogics.com/landing/technologies/next.svg" },
  { name: "Kubernetes", icon: "https://kavelogics.com/landing/technologies/django.svg" },
  { name: "AWS", icon: "https://kavelogics.com/landing/technologies/svelte.svg" },
  { name: "Jenkins", icon: "https://kavelogics.com/landing/technologies/vue.svg" },
  { name: "Terraform", icon: "https://kavelogics.com/landing/technologies/flask.svg" },
];

const buttonTabs = ["Frontend", "Backend", "DevOps"];

export default function Innovation() {
  return (
    <section className=" min-h-screen flex justify-center items-center bg-white">
      <div className="w-full h-[70vh] max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-22">
          <h1 className="text-6xl font-bold text-gray-800 mb-12">
            Technologies We Use for Innovation
          </h1>
          <p className="text-gray-600 text-bold  text-3xl mx-auto">
          The following are the most recent tools we evaluate while creating the best IT solutions for you!


          </p>
        </div>

        {/* Tab Buttons */}
        <div className="second-inner-div rounded-2xl bg-[#72dbf56b] h-[65vh] pt-12">
        <div className="flex justify-center mb-8">
          <div className="flex gap-8 bg-[#62d3ef6b] px-12 py-4 rounded-full border border-[#00D280]">
            {buttonTabs.map((tab, index) => (
              <button
                key={index}
                className={`text-bold px-18 py-2 rounded-full transition font-medium cursor-pointer  ${
                  tab === "Frontend"
                    ? "bg-[#00D280] text-white shadow text-2xl py-4"
                    : " text-gray-800 text-2xl p-4"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-center flex-wrap gap-8">
            {technologiesRow1.map((tech, index) => (
              <div
                key={`1-${index}`}
                className="flex flex-col items-center w-34 text-center m-6"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  className="w-18 h-18 object-contain mb-6 "
                />
                <p className="text-bold font-bold text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-8">
            {technologiesRow2.map((tech, index) => (
              <div
                key={`2-${index}`}
                className="flex flex-col items-center w-34 text-center m-6"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  className="w-18 h-18 object-contain mb-6"
                />
                <p className="text-bold font-bold text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center flex-wrap gap-8">
            {technologiesRow3.map((tech, index) => (
              <div
                key={`3-${index}`}
                className="flex flex-col items-center w-34 text-center m-6"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  className="w-18 h-18 object-cover mb-6"
                />
                <p className="text-bold font-bold text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
