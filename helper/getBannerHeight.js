export default function getBannerHeight(
  querySelectorOfElementThatHasToReceiveTheMarginTop,
  querySelectorOfElementWhoseHeightIsToBeTaken
) {
  document.querySelector(
    querySelectorOfElementThatHasToReceiveTheMarginTop
  ).style.marginTop = `${
    document.querySelector(querySelectorOfElementWhoseHeightIsToBeTaken)
      ?.offsetHeight
  }px`;
}
