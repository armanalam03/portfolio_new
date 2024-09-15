import { links } from "./constants/data";

export type SectionName = (typeof links)[number]["name"];

export enum ScreenSize {
    MOBILE = 640,
    TABLET = 1024,
  }