import type { ViewTemplate } from "@microsoft/fast-element";

export interface SocialPost {
  readonly text: Readonly<ViewTemplate>;
  readonly date: string;
}
