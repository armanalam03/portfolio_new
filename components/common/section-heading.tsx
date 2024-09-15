import { cn } from "@/lib/utils";
import React from "react";

type SectionHeadingProps = {
  className?: string;
  text: string;
  left?: boolean;
  right?: boolean;
  icon?: React.ReactNode;
};

export default function SectionHeading({
  text,
  className,
  icon,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        `flex items-center justify-start min-w-full gap-2 mb-8 lg:px-[20%] `,
        className
      )}
    >
      <div className="flex items-center justify-between gap-1 w-fit font-semibold shrink-0 text-center text-2xl lg:text-4xl">
        <p
          className={cn(
            `label-md font-markpro bg-gradient-to-r to-orange from-purple bg-clip-text text-transparent`
          )}
        >
          {text}
        </p>
        <span className="mt-1">{icon}</span>
      </div>
    </div>
  );
}
