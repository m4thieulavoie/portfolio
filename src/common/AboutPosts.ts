import { html } from "@microsoft/fast-element";
import { SocialPost } from "./SocialPost";
import cats from "../../images/cats.jpg";

export const aboutPosts = [
  {
    date: "Since forever",
    text: html`<p class="status">
        I love cats 😻 Here are Salem and Alfred cuddling at home
      </p>
      <img src="${cats}" alt="My cats" />`,
  },
  {
    date: "2015 - now",
    text: html`<p class="status">
      I like going to the gym 💪 Too bad I love cookies this much 🍪
    </p>`,
  },
  {
    date: "2010 - now",
    text: html`<p class="status">
        I'm media for
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
      />`,
  },
] as SocialPost[];
