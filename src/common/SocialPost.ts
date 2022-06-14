import type { ViewTemplate } from "@microsoft/fast-element";

export interface SocialPost {
  readonly name: string;
  readonly image?: string;
  readonly link?: string;
  readonly type: 'publication' | 'contribution' | 'project';
  readonly text: Readonly<ViewTemplate>;
}
