import React from "react";

interface EmojiProps {
  emoji: string;
  className?: string;
}

const Emoji: React.FC<EmojiProps> = ({ emoji, className }: EmojiProps) => (
  <span role="img" aria-label="Emoji" className={className ?? ""}>
    {emoji}
  </span>
);

export default Emoji;
