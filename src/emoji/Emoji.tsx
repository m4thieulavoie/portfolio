import React from 'react';

class Emoji extends React.Component<{
    emoji: string
}> {
  render()
  {  return (
    <span role="img" aria-label="Emoji">
        {
            this.props.emoji
        }
    </span>
  );
    }
}

export default Emoji;
