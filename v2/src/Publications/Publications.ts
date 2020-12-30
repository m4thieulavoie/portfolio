import { FASTElement, customElement } from "@microsoft/fast-element";
import { publications } from "../common/PublicationPosts";
import { generatePostsPageTemplate } from "../common/utils";
import styles from "./Publications.scss";

@customElement({
  name: "mathieu-publications",
  template: generatePostsPageTemplate<PublicationsComponent>(
    "Publications",
    publications
  ),
  styles,
})
export default class PublicationsComponent extends FASTElement {}
