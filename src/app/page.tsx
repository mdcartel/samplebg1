"use client";

import { BackgroundBeamsWithCollision } from "@/components/background-beams-with-collision";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <BackgroundBeamsWithCollision>
        <div className="relative z-10 flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center">
            Background Beams
          </h1>
          <p className="text-lg md:text-2xl max-w-lg md:max-w-2xl text-center mt-4 text-neutral-300">
            A stunning animated background with collision effects
          </p>
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}