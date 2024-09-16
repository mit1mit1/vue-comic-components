export const shouldShowIndex = () =>
  !!new URLSearchParams(window.location.search).get(
    "showIndex"
  );
