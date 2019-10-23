import React from 'react';
import { SocialPost } from './SocialPost';
import Emoji from '../emoji/Emoji';

export const aboutPosts = [
    {
      date: "Since forever",
      text: <p className="status">I love cats <Emoji emoji="😻"></Emoji></p>
    },
    {
      date: "2015 - now",
      text: <p className="status">I like going to the gym <Emoji emoji="💪"></Emoji></p>
    },
    {
      date: "2010 - now",
      text: <><p className="status">I'm media for <a href="" target="_blank">@Motoneiges.ca</a></p>
      <img src="https://motoneiges.ca/images/downloaded2018/20181116104248111.jpg" alt=""/>
      </>
    }
  ] as SocialPost[];