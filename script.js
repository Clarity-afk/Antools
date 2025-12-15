function toggleLike(button) {
  const likeImage = button.querySelector("img");

  if (likeImage.src.includes("images/icons/like.svg")) {
    likeImage.src = "images/icons/activelike.svg";
  } else {
    likeImage.src = "images/icons/like.svg";
  }
}

const buttonToLoad = document.querySelector(".loader");
const loadMore = document.querySelector(".tools__btn button");

loadMore.addEventListener("click", () => {
  buttonToLoad.classList.remove("unactive");
  loadMore.remove();
});
