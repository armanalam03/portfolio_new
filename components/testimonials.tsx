"use client";

import React from "react";
import SectionHeading from "./common/section-heading";
import { TestimonialsDemo } from "./testimonials/TestimonailsDemo";
import { useSectionInView } from "@/lib/hooks";

const Testimonials = () => {
  const { ref } = useSectionInView("Testimonials", 0.5);
  return (
    <section
      className="h-full w-full mb-20 flex flex-col justify-center items-center"
      ref={ref}
      id="testimonials"
    >
      <SectionHeading
        icon="😊"
        text=" Mmmm, a little brag"
        right={false}
        left={false}
      />

      <TestimonialsDemo />
    </section>
  );
};

export default Testimonials;
