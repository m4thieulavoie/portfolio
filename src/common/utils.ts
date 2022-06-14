import type { FASTElement } from "@microsoft/fast-element";
import { html, repeat } from "@microsoft/fast-element";
import { Router } from "@vaadin/router";
import type { SocialPost } from "./SocialPost";

export const navigateToPage = (page: string) => {
  Router.go(page);
  window.scrollTo(0, 0);
};

export const generatePostsPageTemplate = <T extends FASTElement>(
  name: string,
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  posts: readonly SocialPost[]
) => html`<mathieu-window
  ><h2 slot="title">${name}</h2>
  <h2 slot="name">${name}</h2>
  <ul>
    ${repeat(
      () => posts,
      html<SocialPost, T>`<mathieu-post>
        ${(x) => x.text}<small slot="date"
          >${(x) => x.image}</small
        ></mathieu-post
      >`
    )}
  </ul>
</mathieu-window>`;
