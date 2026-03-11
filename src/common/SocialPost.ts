export interface SocialPost {
  readonly name: string;
  readonly image?: string;
  readonly emoji?: string;
  readonly link?: string;
  readonly type: "publication" | "contribution" | "project";
  readonly text: string;
}
