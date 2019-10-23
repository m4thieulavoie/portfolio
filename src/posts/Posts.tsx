import React from 'react';
import './Posts.scss';
import { SocialPost } from '../_models/SocialPost';
import Post from '../post/Post';

class Posts extends React.Component<{
    posts: SocialPost[],
}> {
  render()
  {  return (
        this.props.posts.map(post => <Post post={post}></Post>)
  );
    }
}

export default Posts;
