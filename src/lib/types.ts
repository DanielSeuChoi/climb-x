import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

// types.ts
export interface ImageData {
    id: number;
    url: string;
    alt: string;
  }
  