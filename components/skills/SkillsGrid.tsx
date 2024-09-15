import React from "react";
import { skills } from "@/lib/constants/data";

const SkillsGrid = () => {
  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 p-4">
      {skills.map((skill) => (
        <div
          key={skill.label}
          className="sm:p-4 py-4 rounded-md text-center flex items-center gap-2 sm:gap-4 hover:scale-125 transition-all duration-150 cursor-default text-sm md:text-base"
        >
          <img src={skill.src} alt={skill.label} className="w-8 h-8" />
          {skill.label}
        </div>
      ))}
    </section>
  );
};

export default SkillsGrid;
