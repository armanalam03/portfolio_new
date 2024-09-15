import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  text,
  children,
  className,
  left = false,
  right = true,
}: {
  text: string;
  children?: React.ReactNode;
  className?: string;
  left?: boolean;
  right?: boolean;
}) {
  return (
    <div
      className={cn(`flex items-center justify-center w-full gap-2 `, {
        "justify-start": !left,
      })}
    >
      {left && (
        <Image src="/left-line.svg" width={80} height={3} alt="left stroke" />
      )}
      <div className="flex items-center justify-between gap-1 w-fit">
        {children}
        <p
          className={cn(`label-md font-markpro text-left text-2xl`, className)}
        >
          {text}
        </p>
      </div>
      {right && (
        <Image src="/right-line.svg" width={80} height={3} alt="left stroke" />
      )}
    </div>
  );
}
