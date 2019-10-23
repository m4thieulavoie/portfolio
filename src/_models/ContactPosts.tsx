import React from 'react';
import { SocialPost } from './SocialPost';
import Emoji from '../emoji/Emoji';

export const contactPosts = [
    {
      text: <p className="status"><Emoji emoji="✉️"></Emoji> <a href="mailto:mathieulavoie94@gmail.com">mathieulavoie94@gmail.com</a></p>
    },
    {
      date: "2015 - now",
      text: <p className="status">
          <ul>
            <li>
                <a href="">Codepen</a>
            </li>
            <li>
                <a href="">GitHub</a>
            </li>
            <li>
                <a href="">Linkedin</a>
            </li>
            <li>
                <a href="">Twitter</a>
            </li>
            <li>
                <a href="">Instagram</a>
            </li>
          </ul>
      </p>
    }
  ] as SocialPost[];