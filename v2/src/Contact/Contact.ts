import { FASTElement, customElement } from "@microsoft/fast-element";
import { contactPosts } from "../common/ContactPosts";
import { generatePostsPageTemplate } from "../common/utils";
import styles from "./Contact.scss";

@customElement({
  name: "mathieu-contact",
  template: generatePostsPageTemplate<ContactComponent>(
    "Contact",
    contactPosts
  ),
  styles,
})
export default class ContactComponent extends FASTElement {}
