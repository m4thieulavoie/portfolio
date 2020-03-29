export const navigateToPage = (e: MouseEvent, page: string, history: any) => {
  e.preventDefault();
  history.push(page);
  window.scrollTo(0, 0);
};
