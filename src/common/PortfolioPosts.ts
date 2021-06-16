import { html } from "@microsoft/fast-element";
import mca from "../../images/mca.png";
import yvanthibault from "../../images/yvanthibault.png";
import plabonte from "../../images/plabonte.png";
import type { SocialPost } from "./SocialPost";

export const protfolioPosts: readonly SocialPost[] = [
  {
    date: "2021",
    text: html`<h2>Open source contributions</h2>
      <ul class="contributions">
        <li>
          <a
            href="https://github.com/microsoft/fast"
            target="blank"
            rel="noopener noreferrer"
            >@microsoft/fast</a
          >
          - Made it to the top 20 contributors
        </li>
        <li>
          <a
            href="https://github.com/mdn/translated-content"
            target="blank"
            rel="noopener noreferrer"
            >mdn/translated-content</a
          >
          - French typo fix contribution
        </li>
        <li>
          <a
            href="https://github.com/dequelabs/react-axe"
            target="blank"
            rel="noopener noreferrer"
            >react-axe</a
          >
          - Project build config
        </li>
        <li>
          <a
            href="https://github.com/m4thieulavoie/sass-to-string"
            target="blank"
            rel="noopener noreferrer"
            >sass-to-string</a
          >
          - Repository owner
        </li>
        <li>... trying to add more 😅</li>
      </ul>`,
  },
  {
    date: "December 2020",
    text: html`<h2>webcomponents-starter</h2>
      <p class="status">
        Git project template that include a ready-to-go project containing
        TypeScript/linting/SASS/Routing and more!
        <a
          href="https://github.com/m4thieulavoie/webcomponents-starter"
          target="blank"
          rel="noopener noreferrer"
          aria-label="See webcomponents-starter in GitHub"
        >
          See it in GitHub!
        </a>
      </p>
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYxIiBoZWlnaHQ9IjEzMiIgdmlld0JveD0iMCAwIDE2MSAxMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiMyQTNCOEYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMjlBQkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSI1MCUiIHkyPSI1MCUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjMkEzQjhGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzI5QUJFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSI1MCUiIHgyPSIwJSIgeTI9IjUwJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNCNEQ0NEUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRTdGNzE2IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjUwJSIgeDI9IjAlIiB5Mj0iNTAlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iI0I0RDQ0RSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNFN0Y3MTYiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzE2NkRBNSIgZD0iTTE2MC42IDY1LjlsLTE3LjQgMjkuMy0yNC40LTI5LjcgMjQuNC0yOC45eiIvPjxwYXRoIGZpbGw9IiM4RkRCNjkiIGQ9Ik0xNDEuMyAxMDAuMmwtMjYuNS0zMS43LTE1LjkgMjYuNiAyNC43IDM2LjF6Ii8+PHBhdGggZmlsbD0iIzE2NkRBNSIgZD0iTTE0MSAzMS40bC0yNi4yIDMxLjgtMTUuOS0yNi42TDEyMy42Ljl6Ii8+PHBhdGggZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iLjk1IiBkPSJNNjEuMSAzMS40SDE0MUwxMjMuNC45SDc4Ljd6Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgb3BhY2l0eT0iLjk1IiBkPSJNMTE0LjggNjMuM0gxNTlsLTE1LjktMjYuOEg5OC44Ii8+PHBhdGggZmlsbD0idXJsKCNjKSIgb3BhY2l0eT0iLjk1IiBkPSJNMTQxLjMgMTAwLjNINjFsMTcuNiAzMC41aDQ1eiIvPjxwYXRoIGZpbGw9IiMwMTAxMDEiIGQ9Ik03OC42IDEzMC44TDQxIDY1LjggNzkuMS44SDM3LjlMLjQgNjUuOGwzNy41IDY1eiIvPjxwYXRoIGZpbGw9InVybCgjZCkiIG9wYWNpdHk9Ii45NSIgZD0iTTExNC44IDY4LjRIMTU5bC0xNS45IDI2LjhIOTguOCIvPjwvZz48L3N2Zz4="
        alt="WebComponents Logo"
        width="200"
      />`,
  },
  {
    date: "December 2020",
    text: html`<h2>axe-browser-reporter</h2>
      <p class="status">
        Intrusive in-browser Axe reporter that lets you know as soon as you made
        an Accessibility error.
        <a
          href="https://github.com/m4thieulavoie/axe-browser-reporter"
          target="blank"
          rel="noopener noreferrer"
          aria-label="See axe-browser-reporter in GitHub"
        >
          See it in GitHub!
        </a>
      </p>
      <img
        src="https://www.deque.com/wp-content/uploads/2016/12/aXe-300x280.png"
        alt="Axe Logo"
        width="200"
      />`,
  },
  {
    date: "April 2020",
    text: html`<h2>sass-to-string</h2>
      <p class="status">
        Toolset containing a nifty webpack loader that converts a
        <code>.scss</code> file into a javascript string and a node command that
        transforms <code>.scss</code> files in a transpiled CSS JavaScript
        module that can be read by any other JavaScript module.
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
