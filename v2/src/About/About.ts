import { FASTElement, customElement } from "@microsoft/fast-element";
import { aboutPosts } from "../common/AboutPosts";
import { generatePostsPageTemplate } from "../common/utils";
import styles from "./About.scss";

@customElement({
  name: "mathieu-about",
  template: generatePostsPageTemplate<AboutComponent>("About", aboutPosts),
  styles,
})
export default class AboutComponent extends FASTElement {}
