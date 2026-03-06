import React from "react";
import Hero from "../components/Hero";

const Main: React.FC = () => {
  return (
    <>
      {/* Reduced height by approx 6cm (14.5rem) - adjusted by 1cm as requested */}
      <section className="h-[calc(100vh-14.5rem)] min-h-[660px] w-full relative">
        <Hero />
      </section>
    </>
  );
};

export default Main;
