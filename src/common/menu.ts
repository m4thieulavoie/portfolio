interface MenuItem {
  readonly name: string;
  readonly emoji: string;
}

export const menu: ReadonlyArray<MenuItem> = [
  {
    name: "home",
    emoji: "🏡",
  },
  {
    name: "about",
    emoji: "😃",
  },
  {
    name: "history",
    emoji: "📖",
  },
  {
    name: "skillz",
    emoji: "📈",
  },
  {
    name: "publications",
    emoji: "📚",
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
