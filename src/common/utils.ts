import { Router } from "@vaadin/router";

export const navigateToPage = (page: string) => {
  Router.go(page);
  window.scrollTo(0, 0);
};
