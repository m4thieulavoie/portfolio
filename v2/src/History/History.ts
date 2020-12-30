import { FASTElement, customElement } from "@microsoft/fast-element";
import { historyPosts } from "../common/HistoryPosts";
import { generatePostsPageTemplate } from "../common/utils";
import styles from "./History.scss";

@customElement({
  name: "mathieu-history",
  template: generatePostsPageTemplate<HistoryComponent>(
    "History",
    historyPosts
  ),
  styles,
})
export default class HistoryComponent extends FASTElement {}
