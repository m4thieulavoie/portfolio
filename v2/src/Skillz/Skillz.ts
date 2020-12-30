import { FASTElement, customElement } from "@microsoft/fast-element";
import { skillzPosts } from "../common/SkillzPosts";
import { generatePostsPageTemplate } from "../common/utils";
import styles from "./Skillz.scss";

@customElement({
  name: "mathieu-skillz",
  template: generatePostsPageTemplate<SkillzComponent>("Skillz", skillzPosts),
  styles,
})
export default class SkillzComponent extends FASTElement {}
