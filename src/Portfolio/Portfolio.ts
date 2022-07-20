import {
  FASTElement,
  customElement,
  html,
  repeat,
  attr,
  when,
} from "@microsoft/fast-element";
import { protfolioPosts } from "../common/PortfolioPosts";
import type { SocialPost } from "../common/SocialPost";
import styles from "./Portfolio.scss";

@customElement({
  name: "mathieu-portfolio",
  template: html<PortfolioComponent>`<mathieu-window>
    <h2 slot="title">Portfolio</h2>
    <div>
      <matt-button
        variant="${(x) => (!x.selectedFilter ? "primary" : "secondary")}"
        @click=${(x) => x.filter()}
        >All</matt-button
      >
      <matt-button
        variant="${(x) =>
          x.selectedFilter === "publication" ? "primary" : "secondary"}"
        @click=${(x) => x.filter("publication")}
        >Publications</matt-button
      >
      <matt-button
        variant="${(x) =>
          x.selectedFilter === "contribution" ? "primary" : "secondary"}"
        @click=${(x) => x.filter("contribution")}
        >Contributions</matt-button
      >
      <matt-button
        variant="${(x) =>
          x.selectedFilter === "project" ? "primary" : "secondary"}"
        @click=${(x) => x.filter("project")}
        >Projects</matt-button
      >
    </div>
    <ul>
      ${repeat(
        (x) => x.items || protfolioPosts,
        html<SocialPost>`<li>
          ${when(
            (x) => x.image,
            html`<img alt="${(x) => x.name} image" src="${(x) => x.image}" />`
          )}
          ${when(
            (x) => x.emoji && !x.image,
            html`<span class="emoji">${(x) => x.emoji}</span>`
          )}
          <h3>${(x) => x.name}</h3>
          <p>${(x) => x.text}</p>
          ${when(
            (x) => x.link,
            html`<a target="_blank" href="${(x) => x.link}" />`
          )}
        </li>`
      )}
    </ul></mathieu-window
  >`,
  styles,
})
export default class PortfolioComponent extends FASTElement {
  @attr items: SocialPost[] | undefined;
  @attr selectedFilter: string | undefined;

  public filter(postType?: SocialPost["type"]) {
    this.selectedFilter = postType;
    this.items = postType
      ? protfolioPosts.filter(({ type }) => type === postType)
      : undefined;
  }
}
