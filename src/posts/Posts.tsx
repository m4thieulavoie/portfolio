import React from "react";
import "./Posts.scss";
import { SocialPost } from "../_models/SocialPost";
import Post from "../post/Post";

class Posts extends React.Component<{
  title?: string;
  posts: readonly SocialPost[];
}> {
  render() {
    const title = this.props.title ? (
      <h1 className="posts-header">{this.props.title}</h1>
    ) : (
      <div className="spacer"></div>
    );
    return (
      <>
        {title}
        <div className="posts">
          {this.props.posts.map((post, i) => (
            <Post key={`${post.text.toString()}${i}`} post={post}></Post>
          ))}
        </div>
      </>
    );
  }
}

export default Posts;
