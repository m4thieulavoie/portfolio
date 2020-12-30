import {
  FASTElement,
  customElement,
  html,
  attr,
} from "@microsoft/fast-element";
import styles from "./Avatar.scss";
import me from "../../images/me.png";

const template = html<AvatarComponent>`<img
  src="${(x) => x.url}"
  style="width: ${(x) => x.size}rem;height: ${(x) => x.size}rem"
  alt="Mathieu Lavoie - Tech Lead @ LogMeIn"
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
