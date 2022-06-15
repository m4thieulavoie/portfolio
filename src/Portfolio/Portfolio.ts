import {
  FASTElement,
  customElement,
  html,
  repeat,
  attr,
} from "@microsoft/fast-element";
import { protfolioPosts } from "../common/PortfolioPosts";
import type { SocialPost } from "../common/SocialPost";
import styles from "./Portfolio.scss";

@customElement({
  name: "mathieu-portfolio",
  template: html<PortfolioComponent>`<mathieu-window>
    <h2 slot="title">Portfolio</h2>
    <div>
      <matt-button variant="secondary" @click=${(x) => x.filter()}
        >All</matt-button
      >
      <matt-button variant="secondary" @click=${(x) => x.filter("publication")}
        >Publications</matt-button
      >
      <matt-button variant="secondary" @click=${(x) => x.filter("contribution")}
        >Contributions</matt-button
      >
      <matt-button variant="secondary" @click=${(x) => x.filter("project")}
        >Projects</matt-button
      >
    </div>
    <ul>
      ${repeat(
        (x) => x.items || protfolioPosts,
        html<SocialPost>`<li>
          <img alt="${(x) => x.name} image" src="${(x) => x.image}" />
          <h3>${(x) => x.name}</h3>
          <p>${(x) => x.text}</p>
        </li>`
      )}
    </ul></mathieu-window
  >`,
  styles,
})
export default class PortfolioComponent extends FASTElement {
  @attr items: SocialPost[] | undefined;

  public filter(postType?: SocialPost["type"]) {
    this.items = postType
      ? protfolioPosts.filter(({ type }) => type === postType)
      : undefined;
  }
}
