export interface MenuItem {
  readonly name: string;
  readonly emoji: string;
}

export const menu: ReadonlyArray<MenuItem> = [
  {
    name: "home",
    emoji: "🏡",
  },
  {
    name: "resume",
    emoji: "📝",
  },
  {
    name: "portfolio",
    emoji: "🎨",
  },
  {
    name: "contact",
    emoji: "✏️",
  },
];
