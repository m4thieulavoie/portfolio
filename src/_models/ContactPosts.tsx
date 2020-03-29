import React from "react";
import { SocialPost } from "./SocialPost";
import Emoji from "../emoji/Emoji";

export const contactPosts = [
  {
    text: (
      <p className="status">
        <Emoji emoji="✉️"></Emoji>{" "}
        <a href="mailto:mathieulavoie94@gmail.com">mathieulavoie94@gmail.com</a>
      </p>
    )
  },
  {
    date: "2015 - now",
    text: (
      <div className="status">
        <ul>
          <li>
            <a href="https://codepen.io/matmobile">Codepen</a>
          </li>
          <li>
            <a href="https://github.com/matmobile">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mathieu-lavoie-4a2a99122/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://twitter.com/matmobile_js">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com/matmobile">Instagram</a>
          </li>
        </ul>
      </div>
    )
  }
] as SocialPost[];
