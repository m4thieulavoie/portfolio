import { html } from "@microsoft/fast-element";
import cats from "../../images/cats.jpg";
import type { SocialPost } from "./SocialPost";

export const aboutPosts = [
  {
    date: "For +10 years",
    text: html`<div class="status">
      <p>Hey! My name is Mathieu 👋</p>
      <p>
        I have always been passionnate about transforming dark lines of code
        into something people can actually see and appreciate in the browser.
        Back when I was about 12 years old, I started doing some HTML and CSS
        and never stopped since then.
      </p>
      <p>
        Since that became quite limitating rapidly, I started to build expertise
        around PHP and jQuery. I built some really nice tools back then, like a
        CMS and a gym training generator.
      </p>
      <p>
        In 2018, that's where I really took the front-end career path. I started
        learning about JavaScript, TypeScript and Angular (version 4 at the
        time). I then landed my first front-end job at LogMeIn, where I ironed
        my TypeScript skills, and also added the React string to my bow. On the
        UI side of things, I got the opportunity to grow quite a bit my CSS/SASS
        skills and become a reference on those languages. CSS is still by far my
        favourite thing, and I got to collaborate a lot with designers.
      </p>
      <p>
        Between the second half of 2020 and August 2021, I worked as a Tech Lead
        for LogMeIn's design system. I got to interact with pretty much every
        front-end team in the company, work closely with designers and deal with
        priorities. Of course, I still got to spend a lot of time in VSCode,
        where I worked mostly in TypeScript, SASS, CSS, WebComponents and a bit
        of React. On top of that, I learned and got expertise around design
        system with subjects like design tokens and accessibility.
      </p>
      <p>
        More recently, I joined the amazing team at Shopify. I'll be working
        with the Shipping team as a Senior Developer and doing mostly React,
        HTML, CSS and TypeScript.
      </p>
    </div>`,
  },
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
      I like going to the gym 💪 Too bad I love cookies this much 🍪 During
      pandemic, I traded the gym for Zwifting at home 🚴‍♂️
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
        , so you can guess I love snowmobiling. I get to review snowmobiles and
        gear every year.
      </p>
      <img
        src="https://motoneiges.ca/images/downloaded2018/20200313042712284.jpg"
        alt="Yes, I like snowmobiling"
      />`,
  },
] as readonly SocialPost[];
