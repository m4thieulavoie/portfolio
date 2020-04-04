import React from "react";
import "./Avatar.scss";
import classNames from "classnames";

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
          className={classNames(this.props.className, "avatar")}
          src={this.props.url || this.defaultUrl}
          alt="Mathieu's avatar"
        />
      </div>
    );
  }
}

export default Avatar;
