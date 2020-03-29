import React from "react";
import { SocialPost } from "./SocialPost";
import Emoji from "../emoji/Emoji";

export const aboutPosts = [
  {
    date: "Since forever",
    text: (
      <p className="status">
        I love cats <Emoji emoji="😻"></Emoji> Here are Salem and Alfred
        cuddling at home
        <img src="/images/cats.jpg" alt="My cats" />
      </p>
    )
  },
  {
    date: "2015 - now",
    text: (
      <p className="status">
        I like going to the gym <Emoji emoji="💪"></Emoji> Too bad I love
        cookies this much <Emoji emoji="🍪"></Emoji>
      </p>
    )
  },
  {
    date: "2010 - now",
    text: (
      <>
        <p className="status">
          I'm media for{" "}
          <a
            href="https://motoneiges.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Motoneiges.ca
          </a>
          , so you can guess I love snowmobiling
        </p>
        <img
          src="https://motoneiges.ca/images/downloaded2018/20200313042712284.jpg"
          alt="Yes, I like snowmobiling"
        />
      </>
    )
  }
] as SocialPost[];
