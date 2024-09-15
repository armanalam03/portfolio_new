"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function TestimonialsDemo() {
  return (
    <div className="relative  ">
      <div className="flex flex-col antialiased scroll-pl-36 snap-x justify-center gap-6 min-w-full snap-start">
        <div className="snap-start">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "🚀 The UI is sleek and responsive, making everything feel effortless.",
    username: "@aditya",
    name: "Aditya",
    linkedIn: "https://www.linkedin.com/in/jain-adi",
  },
  {
    quote:
      "🔥 Fast, smooth, and visually stunning. A top-notch frontend experience!",
    username: "@parasgoel",
    name: "Paras",
    linkedIn: "https://www.linkedin.com/in/goelparas01/",
  },
  {
    quote: "🌟 The frontend is polished and user-friendly. A joy to navigate.",
    username: "@abhishek",
    name: "Abhishek",
    linkedIn: "https://www.linkedin.com/in/abhishek-chorotiya-7a1a0a222",
  },
  {
    quote:
      "💻 High-quality code and great performance. The UI is a pleasure to use.",
    username: "@thabish",
    name: "Thabish",
    linkedIn: "https://www.linkedin.com/in/thabish",
  },
  {
    quote:
      "🔧 The user interface is intuitive and works perfectly. Highly recommended!",
    username: "@manthan",
    name: "Manthan",
    linkedIn: "https://www.linkedin.com/in/manthan77",
  },
  {
    quote:
      "🔧 Armaan is a talented React developer with a knack for delivering efficient, high-quality code",
    username: "@agrawalharsh90",
    name: "Harsh ",
    linkedIn: "https://www.linkedin.com/in/agrawalharsh90",
  },
];
