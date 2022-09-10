export const getComicNumber = (comicList: Array<string>): number => {
  const comicParam = new URLSearchParams(window.location.search).get("comic");
  if (
    comicParam &&
    parseInt(comicParam) >= 0 &&
    parseInt(comicParam) < comicList.length
  ) {
    return parseInt(comicParam);
  }
  if (comicParam && comicList.includes(comicParam.toLowerCase())) {
    return comicList.indexOf(comicParam.toLowerCase());
  }
  return comicList.length - 1;
};

export const setComic = (comicList: Array<string>, comicNumber: number) => {
  comicNumber = Math.floor(comicNumber);
  if (comicNumber < 0) {
    comicNumber = 0;
  }
  if (comicNumber > comicList.length - 1) {
    comicNumber = comicList.length - 1;
  }
  if ("URLSearchParams" in window) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("comic", comicList[comicNumber]);
    window.location.search = searchParams.toString();
  }
};
