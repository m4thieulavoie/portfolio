export const navigateToPage = (e: MouseEvent | undefined, page: string) => {
  if (e?.preventDefault) {
    e.preventDefault();
  }
  window.location.href = page;
  window.scrollTo(0, 0);
};
