import { FASTElement, customElement } from "@microsoft/fast-element";
import { protfolioPosts } from "../common/PortfolioPosts";
import { generatePostsPageTemplate } from "../common/utils";
import styles from "./Portfolio.scss";

@customElement({
  name: "mathieu-portfolio",
  template: generatePostsPageTemplate<PortfolioComponent>(
    "Skillz",
    protfolioPosts
  ),
  styles,
})
export default class PortfolioComponent extends FASTElement {}
