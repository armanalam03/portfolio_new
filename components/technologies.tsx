import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./common/section-heading";
import SkillsGrid from "./skills/SkillsGrid";

const Technologies = () => {
  const { ref } = useSectionInView("Technologies", 0.5);

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 px-4 flex flex-col items-center w-full"
    >
      <SectionHeading text="Technologies" />
      <SkillsGrid />
    </section>
  );
};

export default Technologies;
