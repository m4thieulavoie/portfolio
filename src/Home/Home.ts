import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { fullName, roleName, currentCompany } from "../common/metadata";
import styles from "./Home.scss";

const template = html`<mathieu-window home
  >
  <section><mathieu-avatar></mathieu-avatar><h2>${fullName}, ${roleName} at ${currentCompany}</h2></section>
  <div class="home-content">
    <h1>Welcome to my online resume!</h1>
    <p>Hey! My name is Matt 👋</p>
      <p>
        I have always been passionate about transforming dark lines of code
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
        favorite thing, and I got to collaborate a lot with designers.
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
  </div></mathieu-window
>`;

@customElement({
  name: "mathieu-home",
  template,
  styles,
})
export default class HomeComponent extends FASTElement {}
