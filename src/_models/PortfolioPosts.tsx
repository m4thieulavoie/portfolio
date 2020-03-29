import React from "react";
import { SocialPost } from "./SocialPost";

export const protfolioPosts = [
  {
    date: "Since end of 2018",
    text: (
      <>
        <h2>LogMeIn</h2>
        <p>
          Working on the GoToConnect app, mostly doing UI stuff, integrating a
          homemade design system and implementing new cool features
        </p>
        <img
          src="https://www.goto.com/-/media/f3381138a943484ab75c8a11649f37d6.png?h=1664&w=2282&la=fr&hash=AF7EE9C347274CF3BFBC53ECE02C89D7"
          alt="GoToConnect"
        />
      </>
    )
  },
  {
    date: "2019",
    text: (
      <>
        <h2>Magazine Web Motoneiges.ca</h2>
        <p>Did a Front-End refresh for the whole Magazine</p>
        <img src="/images/mca.png" alt="Magazine Web Motoneiges.ca" />
      </>
    )
  },
  {
    date: "2018",
    text: (
      <>
        <h2>Garage Yvan Thibault</h2>
        <p>Did a Front-End app for the vehicule dealer</p>
        <img src="/images/yvanthibault.png" alt="Garage Yvan Thibault" />
      </>
    )
  },
  {
    date: "2018",
    text: (
      <>
        <h2>P. Labonté & Fils</h2>
        <p>Did a Front-End app for the vehicule dealer</p>
        <img src="/images/plabonte.png" alt="P. Labonté & Fils" />
      </>
    )
  }
] as SocialPost[];
