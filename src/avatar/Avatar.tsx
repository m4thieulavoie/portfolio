import React from "react";
import "./Avatar.scss";

class Avatar extends React.Component<{
  size: number;
  className?: string;
  url?: string;
}> {
  private defaultUrl =
    "https://pbs.twimg.com/profile_images/1115620831391039488/liG9EQbn_bigger.jpg";
  render() {
    const style = {
      height: this.props.size,
      width: this.props.size
    };

    return (
      <div className="avatar-container">
        <img
          style={style}
          className={"avatar " + this.props.className}
          src={this.props.url || this.defaultUrl}
          alt="Mathieu's avatar"
        />
      </div>
    );
  }
}

export default Avatar;
