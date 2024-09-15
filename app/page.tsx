"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import MyProjects from "@/components/projects/MyProjects";
import Testimonials from "@/components/testimonials";
import Experience from "@/components/experience";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import Technologies from "@/components/technologies";

export default function Home() {
  const windowSize = useWindowSize();
  if (!windowSize.width)
    return (
      <p className="fixed h-dvh w-dvw flex items-center justify-center font-extrabold text-3xl">
        Hi there! I am Armaan.{" "}
      </p>
    );
  return (
    <main className="flex flex-col items-center px-4 overflow-x-hidden relative">
      <About />
      <Technologies />
      <Experience />
      <MyProjects />
      <Testimonials />
      <Contact />
    </main>
  );
}
