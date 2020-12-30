import { FASTElement, html, repeat } from "@microsoft/fast-element";
import { SocialPost } from "./SocialPost";

export const navigateToPage = (e: MouseEvent | undefined, page: string) => {
  if (e?.preventDefault) {
    e.preventDefault();
  }
  window.location.href = page;
  window.scrollTo(0, 0);
};

export const generatePostsPageTemplate = <T extends FASTElement>(
  name: string,
  posts: SocialPost[]
) => html`<mathieu-window
  ><h2 slot="title">Browser - ${name}</h2>
  <h2 slot="name">${name}</h2>
  <ul>
    ${repeat(
      () => posts,
      html<SocialPost, T>`<mathieu-post
        >${(x) => x.text}<small slot="date"
          >${(x) => x.date}</small
        ></mathieu-post
      >`
    )}
  </ul>
</mathieu-window>`;
