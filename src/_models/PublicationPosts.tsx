import React from "react";
import { SocialPost } from "./SocialPost";

export const publications = [
  {
    date: "24/08/2020",
    text: (
      <>
        <h2>Taking advantage of the quarantine as a developer</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://dev.to/m4thieulavoie/taking-advantage-of-the-quarantine-as-a-developer-5elk"
        >
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--q2LY5Ha3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/la66t9tv7yv6x0v2lkhe.jpg" />
        </a>
        <p className="status">
          The current world situation is (hopefully) something we'll experience
          once in our lives. In a sense, for us developers, it is a unique
          opportunity to take advantage of all this free time to perfect our
          skills. If you did not do at least one of those items, you might have
          missed a great opportunity to take your career to the next level.
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dev.to/m4thieulavoie/taking-advantage-of-the-quarantine-as-a-developer-5elk"
          >
            more...
          </a>
        </p>
      </>
    ),
  },
  {
    date: "30/04/2020",
    text: (
      <>
        <h2>How I managed to use SCSS inside Web Components</h2>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://dev.to/m4thieulavoie/how-i-managed-to-use-scss-inside-web-components-3lk9"
        >
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--DtdnbxBe--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/rgzgqyfr5anjo55ucp1z.jpg" />
        </a>
        <p className="status">
          A couple of years ago, I remember rushing to learn the fourth version
          of Angular to get up to speed with "moderns" web frameworks. About
          when I got okay-ish with it, we started writing more and more React at
          work, so I switched onto it. Then emerged Vue.js, svelte, and many
          others. Modern frameworks keep being easier to implement, to use, and
          being lighter. At some extend, the more they evolve, the closer they
          get to barebone Javascript. During this time, another concept is
          making its way quietly: Web Components. Why are we so reticent to
          start daily drive this nice technology? I asked myself the question,
          and tried it for a while. Let me walk through my road blocks, and how
          I managed to get over each one of them.
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dev.to/m4thieulavoie/how-i-managed-to-use-scss-inside-web-components-3lk9"
          >
            more...
          </a>
        </p>
      </>
    ),
  },
] as SocialPost[];
