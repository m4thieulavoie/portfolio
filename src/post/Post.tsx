import React from "react";
import "./Post.scss";
import Avatar from "../avatar/Avatar";
import { SocialPost } from "../_models/SocialPost";

class Post extends React.Component<{
  post: SocialPost;
}> {
  render() {
    return (
      <div className="post">
        <div className="header">
          <Avatar size={50}></Avatar>
          <div className="infos">
            <strong>Mathieu Lavoie</strong>
            <p>@m4thieulavoie</p>
          </div>
        </div>
        {this.props.post.text}

        {this.props.post.date ? (
          <footer>
            <small>⏱ {this.props.post.date}</small>
          </footer>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Post;
