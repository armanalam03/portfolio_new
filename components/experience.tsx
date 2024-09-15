"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./common/section-heading";
import { ExpandableCardDemo } from "./blocks/expandable-card-demo-grid";

export default function Experience() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 px-4 flex flex-col items-center w-full"
    >
      <SectionHeading text="Experience" />
      <ExpandableCardDemo />
    </section>
  );
}
