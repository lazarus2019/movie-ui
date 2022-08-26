import assets from "../assets";

export default function getImage(
  defaultImg,
  defaultFn = (e) => {},
  isOrg = false
) {
  let bg;
  if (defaultImg) {
    bg = defaultFn(defaultImg);
  } else {
    if (isOrg) {
      bg = assets.images.blankBackdrop;
    } else {
      bg = assets.images.blankPoster;
    }
  }
  return bg;
}
