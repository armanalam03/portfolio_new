"use client";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { ScreenSize } from "@/lib/types";
import Image from "next/image";
import React from "react";

type Props = {};

const CommonHand = (props: Props) => {
  const { width } = useWindowSize();
  if (!width) return null;
  return (
    <Image
      src={"/left-hand.webp"}
      width={width > ScreenSize.MOBILE ? 140 : 100}
      height={width > ScreenSize.MOBILE ? 140 : 100}
      alt="asdf"
      className="absolute left-0 top-0 "
    />
  );
};

export default CommonHand;
