import { html } from "@microsoft/fast-element";
import { SocialPost } from "./SocialPost";
import mca from "../../images/mca.png";
import yvanthibault from "../../images/yvanthibault.png";
import plabonte from "../../images/plabonte.png";

export const protfolioPosts: SocialPost[] = [
  {
    date: "Since end of 2018",
    text: html`<h2>LogMeIn</h2>
      <p>
        Working on the GoToConnect app, mostly doing UI stuff, integrating a
        homemade design system and implementing new cool features
      </p>
      <img
        src="https://www.goto.com/-/media/f3381138a943484ab75c8a11649f37d6.png?h=1664&w=2282&la=fr&hash=AF7EE9C347274CF3BFBC53ECE02C89D7"
        alt="GoToConnect"
      />`,
  },
  {
    date: "April 2020",
    text: html`<h2>sass-to-string</h2>
      <p class="status">
        Nifty webpack loader that converts a <code>.scss</code> file into a
        javascript string.{" "}
        <a
          href="https://www.npmjs.com/package/sass-to-string"
          target="blank"
          rel="noopener noreferrer"
        >
          See it on npmjs!
        </a>
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
        alt="SASS Logo"
        width="200"
      />`,
  },
  {
    date: "2019",
    text: html`<h2>Magazine Web Motoneiges.ca</h2>
      <p>Did a Front-End refresh for the whole Magazine</p>
      <img src="${mca}" alt="Magazine Web Motoneiges.ca" />`,
  },
  {
    date: "2018",
    text: html`<h2>Garage Yvan Thibault</h2>
      <p>Did a Front-End app for the vehicule dealer</p>
      <img src="${yvanthibault}" alt="Garage Yvan Thibault" />`,
  },
  {
    date: "2018",
    text: html`<h2>P. Labonté & Fils</h2>
      <p>Did a Front-End app for the vehicule dealer</p>
      <img src="${plabonte}" alt="P. Labonté & Fils" />`,
  },
];
