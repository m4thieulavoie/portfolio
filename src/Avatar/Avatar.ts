import {
  FASTElement,
  customElement,
  html,
  attr,
} from "@microsoft/fast-element";
import me from "../../images/memoji.png";
import { fullName } from "../common/metadata";
import styles from "./Avatar.scss";

const template = html<AvatarComponent>`<div
  style="width: ${(x) => x.size}rem;height: ${(x) =>
    x.size}rem; background-image: url(${(x) => x.url});background-size: contain;"
  alt="${fullName} - Senior Frontend @ Shopify"
/>`;

@customElement({
  name: "mathieu-avatar",
  template,
  styles,
})
export default class AvatarComponent extends FASTElement {
  @attr size = 15;

  @attr url = me;
}
