import type { FASTElement } from "@microsoft/fast-element";
import { html, repeat } from "@microsoft/fast-element";
import type { SocialPost } from "./SocialPost";

export const navigateToPage = (page: string) => {
  window.location.href = page;
  window.scrollTo(0, 0);
};

export const generatePostsPageTemplate = <T extends FASTElement>(
  name: string,
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  posts: readonly SocialPost[]
) => html`<mathieu-window
  ><h2 slot="title">Browser - ${name}</h2>
  <h2 slot="name">${name}</h2>
  <ul>
    ${repeat(
      () => posts,
      html<SocialPost, T>`<mathieu-post>
        ${(x) => x.text}<small slot="date"
          >${(x) => x.date}</small
        ></mathieu-post
      >`
    )}
  </ul>
</mathieu-window>`;
