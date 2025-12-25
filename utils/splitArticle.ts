import { workshopArticle as str } from './data';

const splitString = (): string[] => {
  let middle = Math.floor(str.length / 2);
  let before = str.lastIndexOf(' ', middle);
  let after = str.indexOf(' ', middle + 1);

  if (middle - before < after - middle) {
    middle = before;
  } else {
    middle = after;
  }

  let s1 = str.substring(0, middle);
  let s2 = str.substring(middle + 1);
  return [s1, s2];
};

const splitArticle = [splitString()[0], splitString()[1]];

export default splitArticle;
